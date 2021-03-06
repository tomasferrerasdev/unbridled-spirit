import mongoose, { model, Model, Schema } from 'mongoose';
import { Iproduct } from '../interfaces';

const productSchema = new Schema(
  {
    description: { type: String, required: true, default: '' },
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
    title: { type: String, required: true, default: '' },
    type: {
      type: String,
      enum: {
        values: [
          'kentucky',
          'tennessee',
          'straight',
          'single-barrel',
          'accessories',
        ],
        message: '${VALUE} is not an allowed type',
      },
      default: 'tennessee',
    },
    ABV: { type: Number, required: true },
  },
  {
    timestamps: true,
  }
);

productSchema.index({ title: 'text', tags: 'text' });

const Product: Model<Iproduct> =
  mongoose.models.Product || model('Product', productSchema);

export default Product;
