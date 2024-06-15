'use client';

import React, { FC } from 'react';

import {
  useCompanySetting,
  useCompanySettingState,
} from '@/hooks/perusahaan/setting/hook';

import LoadingDots from '@/components/atoms/LoadingDots';
import PerusahaanLayout from '@/components/layouts/perusahaan';

import PerusahaanPengaturanContent from '@/modules/perusahaan/pengaturan/content';

import { TCompanyProfileResponse } from '@/types/perusahaan/setting';

const PerusahaanPengaturanModule: FC = () => {
  const { data, isLoading } = useCompanySetting();
  const { setCompanySettingData } = useCompanySettingState();

  setCompanySettingData(data as TCompanyProfileResponse);

  return (
    <PerusahaanLayout>
      {data ? (
        <PerusahaanPengaturanContent isLoading={isLoading} />
      ) : (
        <LoadingDots hScreen={true} />
      )}
    </PerusahaanLayout>
  );
};

export default PerusahaanPengaturanModule;
