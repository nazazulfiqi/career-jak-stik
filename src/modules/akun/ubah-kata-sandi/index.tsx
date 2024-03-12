import React, { FC } from 'react';

import AkunLayout from '@/components/layouts/akun';
import { BaseLayout } from '@/components/layouts/base/base';

import UbahKataSandiContent from '@/modules/akun/ubah-kata-sandi/content';

const AkunKataSandiModule: FC = () => {
  return (
    <BaseLayout>
      <AkunLayout>
        <UbahKataSandiContent />
      </AkunLayout>
    </BaseLayout>
  );
};

export default AkunKataSandiModule;
