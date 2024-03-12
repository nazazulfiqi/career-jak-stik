import React, { FC } from 'react';

import { BreadCrumb } from '@/components/atoms/bread-crumb';
import { BaseLayout } from '@/components/layouts/base/base';

import LamaranSayaContent from '@/modules/lamaran-saya/content';

const LamaranSayaModule: FC = () => {
  const lamaranBC = [
    {
      name: 'Beranda',
      link: '/',
    },
    {
      name: 'Lamaran Saya',
      link: '/lamaran-saya',
    },
  ];
  return (
    <BaseLayout>
      <BreadCrumb items={lamaranBC} />
      <LamaranSayaContent />
    </BaseLayout>
  );
};

export default LamaranSayaModule;
