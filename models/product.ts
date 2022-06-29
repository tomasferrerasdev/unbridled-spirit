import mongoose, { model, Model, Schema } from 'mongoose';
import { Iproduct } from '../interfaces';

const productSchema = new Schema(
  {
    description: { type: String, required: true },
    images: [{ type: String }],
    inStock: { type: Number, required: true, default: 0 },
    price: { type: Number, required: true, default: 0 },
    sizes: [
      {
        type: String,
        enum: {
          values: ['1L', '750ml', '375ml', '200ml'],
          message: '${VALUE} is not an allowed size',
        },
      },
    ],
    slug: { type: String, required: true, unique: true },
    tags: [{ type: String }],
    title: { type: String, required: true },
    type: {
      type: String,
      enum: {
        values: ['Kentucky', 'Tennessee', 'Straight', 'Single-Barrel'],
        message: '${VALUE} is not an allowed type',
      },
    },
    ABV: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

// TODO MongoDB index

const Product: Model<Iproduct> =
  mongoose.models.Product || model('Product', productSchema);

export default Product;
