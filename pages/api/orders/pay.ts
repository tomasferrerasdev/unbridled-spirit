import axios from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next';
import { db } from '../../../database';
import { IPaypal } from '../../../interfaces';
import { Order } from '../../../models';

type Data = {
  message: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  switch (req.method) {
    case 'POST':
      return payOrder(req, res);

    default:
      return res.status(400).json({ message: 'Bad request en pago' });
  }
}

const getPaypalBearerToken = async (): Promise<string | null> => {
  const PAYPAL_CLIENT = process.env.NEXT_PUBLIC_PAYPAL_CLIENT;
  const PAYPAL_SECRET = process.env.PAYPAL_SECRET;

  const base64Token = Buffer.from(
    `${PAYPAL_CLIENT}:${PAYPAL_SECRET}`,
    'utf-8'
  ).toString('base64');

  const body = new URLSearchParams('grant_type=client_credentials');

  try {
    const { data } = await axios.post(
      process.env.PAYPAL_OAUTH_URL || '',
      body,
      {
        headers: {
          Authorization: `Basic ${base64Token}`,
          'Content-Type': 'application/x-www-form-urlencoded',
        },

        // Basic QVdGWHFKYWN5Qi01d0w3by1zVC04dDUxMDRyZU5rVHNTMFktY0t3V1N5Z2ZUbFJLU1R4MzdaNnVJbGZiQ1RQSkRtUm1DS3hvcGk1Z0UzdXc6RUM1ZDJkQXBGUjZzRklIeWJSaFBwWkJGNDVRUW5OY1U3aUl2ZXBCSUtVNTZqd2swOGdCZ1hfeXhHQjJTel91aGVhSnJtdmJqc2FLekNOa3k
      }
    );

    return data.access_token;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log('error dentro de axios', error.response?.data);
    } else {
      console.log('error fuera de axios', error);
    }

    return null;
  }
};

export const payOrder = async (
  req: NextApiRequest,
  res: NextApiResponse<Data>
) => {
  const paypalBearerToken = await getPaypalBearerToken();

  if (!paypalBearerToken) {
    return res
      .status(400)
      .json({ message: 'No se pudo confirmar token de paypal' });
  }

  const { transactionId = '', orderId = '' } = req.body;

  const { data } = await axios.get<IPaypal.PaypalOrderStatusResponse>(
    `${process.env.PAYPAL_ORDERS_URL}/${transactionId}`,
    {
      headers: {
        Authorization: `Bearer ${paypalBearerToken}`,
      },
    }
  );

  if (data.status !== 'COMPLETED') {
    return res.status(401).json({ message: 'Orden no pagada o reconocida' });
  }

  await db.connect();

  const dbOrder = await Order.findById(orderId);

  if (!dbOrder) {
    await db.disconnect();
    return res
      .status(400)
      .json({ message: 'Orden no existe en base de datos' });
  }

  if (dbOrder.total !== Number(data.purchase_units[0].amount.value)) {
    await db.disconnect();
    return res
      .status(400)
      .json({ message: 'Datos de de paypal y db no son iguales' });
  }

  dbOrder.transactionId = transactionId;
  dbOrder.isPaid = true;
  await dbOrder.save();

  await db.disconnect();

  return res.status(200).json({ message: 'Orden pagada' });
};
