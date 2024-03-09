import React, { FC } from 'react';

import { BreadCrumb } from '@/components/atoms/bread-crumb';
import { BaseLayout } from '@/components/layouts/base/base';

import DetailLowonganContent from '@/modules/jobs/detail-jobs/content';

const DetailLowonganModule: FC = () => {
  const detailJobsBC = [
    {
      name: 'Beranda',
      link: '/',
    },
    {
      name: 'Lowongan',
      link: '/cari-lowongan',
    },
    {
      name: 'STMIK Jakarta',
      link: '/cari-perusahaan/1',
    },
    {
      name: 'Detail Lowongan',
      link: '/cari-lowongan/1',
    },
  ];

  return (
    <BaseLayout>
      <BreadCrumb items={detailJobsBC} />
      <DetailLowonganContent />
    </BaseLayout>
  );
};

export default DetailLowonganModule;
