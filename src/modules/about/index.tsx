import React, { FC } from 'react';

import { BreadCrumb } from '@/components/atoms/bread-crumb';
import { BaseLayout } from '@/components/layouts/base/base';

import AboutContent from '@/modules/about/content';

const TentangKamiModule: FC = () => {
  const aboutBC = [
    {
      name: 'Beranda',
      link: '/',
    },
    {
      name: 'Tentang Kami',
      link: '/tentang-kami',
    },
  ];
  return (
    <BaseLayout>
      <BreadCrumb items={aboutBC} />
      <AboutContent />
    </BaseLayout>
  );
};

export default TentangKamiModule;
