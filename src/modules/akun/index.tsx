'use client';

import React, { FC } from 'react';

import { useProfile } from '@/hooks/account/hook';

import LoadingDots from '@/components/atoms/LoadingDots';
import AkunLayout from '@/components/layouts/akun';
import { BaseLayout } from '@/components/layouts/base/base';

import EditProfilContent from '@/modules/akun/content';

const AkunModule: FC = () => {
  const { data, isLoading } = useProfile();

  return (
    <BaseLayout>
      <AkunLayout>
        {data ? (
          <EditProfilContent data={data} isLoading={isLoading} />
        ) : (
          <LoadingDots hScreen={true} />
        )}
      </AkunLayout>
    </BaseLayout>
  );
};

export default AkunModule;
