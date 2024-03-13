import React, { FC } from 'react';

import PerusahaanLayout from '@/components/layouts/perusahaan';

import PerusahaanPengaturanContent from '@/modules/perusahaan/pengaturan/content';

const PerusahaanPengaturanModule: FC = () => {
  return (
    <PerusahaanLayout>
      <PerusahaanPengaturanContent />
    </PerusahaanLayout>
  );
};

export default PerusahaanPengaturanModule;
