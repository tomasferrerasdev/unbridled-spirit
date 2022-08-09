import { NextPage } from 'next';
import { ShopLayout } from '../../components/layouts';
import { ProductList } from '../../components/products/ProductList';
import { FullScreenLoading, PageTitles } from '../../components/ui';
import { useProducts } from '../../hooks';

const TennesseePage: NextPage = () => {
  const { products, isLoading } = useProducts('/products?type=tennessee');

  return (
    <ShopLayout
      title={'Unbridled spirit | Shop'}
      pageDescription={
        'find the best tennessee bourbons online, free shipping anywhere in the United States'
      }
    >
      <PageTitles title={'Tennessee'} subTitle={'Bourbon'} />

      {isLoading ? <FullScreenLoading /> : <ProductList products={products} />}
    </ShopLayout>
  );
};

export default TennesseePage;
