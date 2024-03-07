import Image from 'next/image';
import React from 'react';

import { BaseLayout } from '@/components/layouts/base/base';

import CategorySection from '@/modules/landing-page/category';
import CompaniesSection from '@/modules/landing-page/companies';
import CTASection from '@/modules/landing-page/cta';
import FeaturedJobSection from '@/modules/landing-page/featured-job';
import HeroSection from '@/modules/landing-page/hero';
import LatestJobSection from '@/modules/landing-page/latest-job';
import NewsSection from '@/modules/landing-page/news';

const LandingPage = () => {
  return (
    <BaseLayout>
      <div className='absolute right-0 top-0 -z-10 min-h-screen w-full'>
        <Image
          src='/images/landing-page/hero-image.jpg'
          alt='Logo'
          fill
          className='object-cover'
        />
      </div>
      <HeroSection />
      <CompaniesSection />
      <CategorySection />
      <NewsSection />
      <CTASection />
      <FeaturedJobSection />
      <LatestJobSection />
    </BaseLayout>
  );
};

export default LandingPage;
