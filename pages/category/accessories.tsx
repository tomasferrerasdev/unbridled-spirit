import { NextPage } from 'next';
import { ShopLayout } from '../../components/layouts';
import { FullScreenLoading, PageTitles } from '../../components/ui';

const AccessoriesPage: NextPage = () => {
  return (
    <ShopLayout
      title={'Unbridled spirit | Shop'}
      pageDescription={
        'find the best tennessee bourbons online, free shipping anywhere in the United States'
      }
    >
      <PageTitles
        title={'Bourbon'}
        subTitle={'Accessories - ⚠️ Under contruction ⚠️'}
      />

      <FullScreenLoading />
    </ShopLayout>
  );
};

export default AccessoriesPage;
