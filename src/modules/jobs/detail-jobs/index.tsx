'use client';

import { useParams } from 'next/navigation';
import React, { FC } from 'react';

import { useGetDetailJob } from '@/hooks/jobs/hook';

import { BreadCrumb } from '@/components/atoms/bread-crumb';
import LoadingDots from '@/components/atoms/LoadingDots';
import { BaseLayout } from '@/components/layouts/base/base';

import DetailLowonganContent from '@/modules/jobs/detail-jobs/content';

const DetailLowonganModule: FC = () => {
  const params = useParams();

  console.log(params);

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

  const { data, isLoading } = useGetDetailJob(String(params.id));

  return (
    <BaseLayout>
      <BreadCrumb items={detailJobsBC} />
      {isLoading ? (
        <LoadingDots hScreen={true} />
      ) : data ? (
        <DetailLowonganContent data={data.data} />
      ) : (
        <p>Lowongan tidak tersedia</p>
      )}
    </BaseLayout>
  );
};

export default DetailLowonganModule;
