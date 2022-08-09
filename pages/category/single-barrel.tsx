import { NextPage } from 'next';
import { ShopLayout } from '../../components/layouts';
import { ProductList } from '../../components/products/ProductList';
import { FullScreenLoading, PageTitles } from '../../components/ui';
import { useProducts } from '../../hooks';

const SingleBarrelPage: NextPage = () => {
  const { products, isLoading } = useProducts('/products?type=single-barrel');

  return (
    <ShopLayout
      title={'Unbridled spirit | Shop'}
      pageDescription={
        'find the best Single-Barrel bourbons online, free shipping anywhere in the United States'
      }
    >
      <PageTitles title={'Single-Barrel'} subTitle={'Bourbon'} />

      {isLoading ? <FullScreenLoading /> : <ProductList products={products} />}
    </ShopLayout>
  );
};

export default SingleBarrelPage;
