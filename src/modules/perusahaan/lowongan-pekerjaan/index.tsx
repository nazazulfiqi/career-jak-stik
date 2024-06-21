'use client';

import { useSession } from 'next-auth/react';
import React, { FC } from 'react';

import { useGetAllJobByCompanyId } from '@/hooks/perusahaan/jobs/hook';

import LoadingDots from '@/components/atoms/LoadingDots';
import PerusahaanLayout from '@/components/layouts/perusahaan';

import PerusahaanLowonganPekerjaanContent from '@/modules/perusahaan/lowongan-pekerjaan/content';

const PerusahaanLowonganPekerjaanModule: FC = () => {
  const { data: session } = useSession();
  const [id, setId] = React.useState('');

  const { data, isLoading } = useGetAllJobByCompanyId();

  return (
    <PerusahaanLayout>
      {data ? (
        <PerusahaanLowonganPekerjaanContent data={data.data} />
      ) : (
        <LoadingDots hScreen={true} />
      )}
    </PerusahaanLayout>
  );
};

export default PerusahaanLowonganPekerjaanModule;
