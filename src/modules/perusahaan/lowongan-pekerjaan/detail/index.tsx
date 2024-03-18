import React, { FC } from 'react';

import PerusahaanLayout from '@/components/layouts/perusahaan';

import LowonganPekerjaanDetailContent from '@/modules/perusahaan/lowongan-pekerjaan/detail/content';

const LowonganPekerjaanDetailModule: FC = () => {
  return (
    <PerusahaanLayout>
      <LowonganPekerjaanDetailContent />
    </PerusahaanLayout>
  );
};

export default LowonganPekerjaanDetailModule;
