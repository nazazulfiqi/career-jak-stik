import React, { FC } from 'react';

import { BreadCrumb } from '@/components/atoms/bread-crumb';
import { BaseLayout } from '@/components/layouts/base/base';

import DetailPerusahaanContent from '@/modules/company/detail-company/content';

const DetailPerusahaanModule: FC = () => {
  const detailCompanyBC = [
    {
      name: 'Beranda',
      link: '/',
    },
    {
      name: 'Perusahaan',
      link: '/cari-perusahaans',
    },
    {
      name: 'STMIK Jakarta',
      link: '/cari-perusahaan/1',
    },
  ];

  return (
    <BaseLayout>
      <BreadCrumb items={detailCompanyBC} />
      <DetailPerusahaanContent />
    </BaseLayout>
  );
};

export default DetailPerusahaanModule;
