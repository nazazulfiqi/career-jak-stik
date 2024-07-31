import React from 'react';

import { BaseLayout } from '@/components/layouts/base/base';

import DetailNewsModule from '@/modules/news/detail';

const DetailBeritaPage = () => {
  return (
    <BaseLayout>
      <DetailNewsModule />
    </BaseLayout>
  );
};

export default DetailBeritaPage;
