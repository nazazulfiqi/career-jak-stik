'use client';

import { useParams } from 'next/navigation';
import React, { FC } from 'react';

import { useGetCompanyDetail } from '@/hooks/company/hook';

import { BreadCrumb } from '@/components/atoms/bread-crumb';
import LoadingDots from '@/components/atoms/LoadingDots';
import { BaseLayout } from '@/components/layouts/base/base';

import DetailPerusahaanContent from '@/modules/company/detail-company/content';

const DetailPerusahaanModule: FC = () => {
  const params = useParams();

  const { data, isLoading } = useGetCompanyDetail(String(params.id));

  const detailCompanyBC = [
    {
      name: 'Beranda',
      link: '/',
    },
    {
      name: 'Cari Perusahaan',
      link: '/cari-perusahaan',
    },
    {
      name: 'STMIK Jakarta',
      link: `/cari-perusahaan/${data?.data?.userId}`,
    },
  ];

  return (
    <BaseLayout>
      <BreadCrumb items={detailCompanyBC} />
      {isLoading ? (
        <LoadingDots hScreen={true} />
      ) : data ? (
        <DetailPerusahaanContent data={data.data} />
      ) : (
        <p>Lowongan tidak tersedia</p>
      )}
    </BaseLayout>
  );
};

export default DetailPerusahaanModule;
