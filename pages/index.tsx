import type { NextPage } from 'next';
import { ShopLayout } from '../components/layouts';
import { HeroSection } from '../components/ui';

const HomePage: NextPage = () => {
  return (
    <ShopLayout
      title={'Unbridled spirit | Shop'}
      pageDescription={
        'Order Bourbon Online and have it delivered directly to your door. Buy bourbon online today. Large selection of Single Batch Bourbon, Whiskies and more.'
      }
    >
      <HeroSection />
    </ShopLayout>
  );
};

export default HomePage;
