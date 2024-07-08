'use client';

import { useParams } from 'next/navigation';
import React, { FC } from 'react';

import {
  useApplicantByJobIdState,
  useGetAllApplicantByJobId,
} from '@/hooks/perusahaan/jobs/hook';

import LoadingDots from '@/components/atoms/LoadingDots';
import PerusahaanLayout from '@/components/layouts/perusahaan';

import LowonganPekerjaanDetailContent from '@/modules/perusahaan/lowongan-pekerjaan/detail/content';

import { TGetAllApplicantResponse } from '@/types/perusahaan/lowongan';

const LowonganPekerjaanDetailModule: FC = () => {
  const { id } = useParams();

  const { data, isLoading } = useGetAllApplicantByJobId(String(id));

  const { getApplicantByJobIdData, setApplicantByJobIdData } =
    useApplicantByJobIdState();

  setApplicantByJobIdData(data as TGetAllApplicantResponse);

  return (
    <PerusahaanLayout>
      {data && !isLoading ? (
        <LowonganPekerjaanDetailContent />
      ) : (
        <LoadingDots hScreen={true} />
      )}
    </PerusahaanLayout>
  );
};

export default LowonganPekerjaanDetailModule;
