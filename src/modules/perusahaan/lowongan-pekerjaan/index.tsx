import React, { FC } from 'react';

import PerusahaanLayout from '@/components/layouts/perusahaan';

import PerusahaanLowonganPekerjaanContent from '@/modules/perusahaan/lowongan-pekerjaan/content';

const PerusahaanLowonganPekerjaanModule: FC = () => {
  return (
    <PerusahaanLayout>
      <PerusahaanLowonganPekerjaanContent />
    </PerusahaanLayout>
  );
};

export default PerusahaanLowonganPekerjaanModule;
