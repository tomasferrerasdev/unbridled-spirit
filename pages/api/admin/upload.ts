import formidable from 'formidable';
import fs from 'fs';
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  message: string;
};

export const config = {
  api: {
    bodyParser: false,
  },
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  switch (req.method) {
    case 'POST':
      return uploadFile(req, res);

    default:
      res.status(400).json({ message: 'Bad request' });
      break;
  }
}

const parseFiles = async (req: NextApiRequest) => {
  return new Promise((resolve, reject) => {
    const form = new formidable.IncomingForm();
    form.parse(req, async (err, field, files) => {
      if (err) {
        return reject(err);
      }

      await saveFile(files.file as formidable.File);
      resolve(true);
    });
  });
};

const uploadFile = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  await parseFiles(req);

  return res.status(200).json({ message: 'file uploaded' });
};

const saveFile = async (file: formidable.File) => {
  const data = fs.readFileSync(file.filepath);
  fs.writeFileSync(`./public/${file.originalFilename}`, data);
  fs.unlinkSync(file.filepath);
  return;
};
