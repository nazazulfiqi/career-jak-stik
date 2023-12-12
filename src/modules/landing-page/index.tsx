import React from 'react';

import { BaseLayout } from '@/components/layouts/base/base';

import CategorySection from '@/modules/landing-page/category';
import CompaniesSection from '@/modules/landing-page/companies';
import CTASection from '@/modules/landing-page/cta';
import HeroSection from '@/modules/landing-page/hero';

const LandingPage = () => {
  return (
    <BaseLayout>
      <HeroSection />
      <CompaniesSection />
      <CategorySection />
      <CTASection />
    </BaseLayout>
  );
};

export default LandingPage;
