import type { NextPage } from 'next';
import { ShopLayout } from '../components/layouts';
import { ProductList } from '../components/products/ProductList';
import { FullScreenLoading, HeroSection, PageTitles } from '../components/ui';
import { useProducts } from '../hooks';

const HomePage: NextPage = () => {
  const { products, isLoading } = useProducts('/products');

  return (
    <ShopLayout
      title={'Unbridled spirit | Shop'}
      pageDescription={
        'Order Bourbon Online and have it delivered directly to your door. Buy bourbon online today. Large selection of Single Batch Bourbon, Whiskies and more.'
      }
    >
      <HeroSection />
      <PageTitles title={'Shop'} subTitle={'All products'} />
      {isLoading ? <FullScreenLoading /> : <ProductList products={products} />}
    </ShopLayout>
  );
};

export default HomePage;
