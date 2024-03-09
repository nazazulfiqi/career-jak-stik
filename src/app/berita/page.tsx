import React from 'react';

import { BreadCrumb } from '@/components/atoms/bread-crumb';
import { BaseLayout } from '@/components/layouts/base/base';

import NewsModule from '@/modules/news';

const BeritaPage = () => {
  const NewsBC = [
    {
      name: 'Beranda',
      link: '/',
    },
    {
      name: 'Berita',
      link: '/berita',
    },
  ];

  return (
    <BaseLayout>
      <BreadCrumb items={NewsBC} />

      <NewsModule />
    </BaseLayout>
  );
};

export default BeritaPage;
