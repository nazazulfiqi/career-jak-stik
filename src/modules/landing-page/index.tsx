import React from 'react';

import { BaseLayout } from '@/components/layouts/base/base';

import HeroSection from '@/modules/landing-page/hero';

const LandingPage = () => {
  return (
    <BaseLayout>
      <HeroSection />
    </BaseLayout>
  );
};

export default LandingPage;
