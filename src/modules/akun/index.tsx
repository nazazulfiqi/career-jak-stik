import React, { FC } from 'react';

import AkunLayout from '@/components/layouts/akun';
import { BaseLayout } from '@/components/layouts/base/base';

import EditProfilContent from '@/modules/akun/content';

const AkunModule: FC = () => {
  return (
    <BaseLayout>
      <AkunLayout>
        <EditProfilContent />
      </AkunLayout>
    </BaseLayout>
  );
};

export default AkunModule;
