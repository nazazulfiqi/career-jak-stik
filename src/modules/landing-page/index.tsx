import React from 'react';

import { BaseLayout } from '@/components/layouts/base/base';

import CategorySection from '@/modules/landing-page/category';
import CompaniesSection from '@/modules/landing-page/companies';
import HeroSection from '@/modules/landing-page/hero';

const LandingPage = () => {
  return (
    <BaseLayout>
      <HeroSection />
      <CompaniesSection />
      <CategorySection />
    </BaseLayout>
  );
};

export default LandingPage;
