'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import React, { FC } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { BreadCrumb } from '@/components/atoms/bread-crumb';
import { BaseLayout } from '@/components/layouts/base/base';
import ExploreDataContainer from '@/containers/ExploreDataContainers';

import { formFilterSchema } from '@/validations/form-schema';

const PerusahaanModule: FC = () => {
  const companyBC = [
    {
      name: 'Beranda',
      link: '/',
    },
    {
      name: 'Perusahaan',
      link: '/cari-perusahaan',
    },
  ];

  const formFilter = useForm<z.infer<typeof formFilterSchema>>({
    resolver: zodResolver(formFilterSchema),
    defaultValues: {
      categories: [],
    },
  });

  const onSubmitFormFilter = async (val: z.infer<typeof formFilterSchema>) => {
    console.log(val);
  };

  const filters = [
    {
      name: 'Industri',
      label: 'Industri',
      items: [
        {
          id: '1',
          label: 'Technology',
        },
        {
          id: '2',
          label: 'Graphic Design',
        },
        {
          id: '3',
          label: 'Sales',
        },
      ],
    },
  ];

  const companyData = [
    {
      id: '1',
      image: '/images/stmik.png',
      name: 'TechCo',
      totalJobs: 50,
      description:
        'A leading technology company specializing in software development.',
      website: 'https://www.techco.com',
      location: 'San Francisco, CA',
      industry: 'Technology',
      employee: '5000+',
      dateFounded: new Date('2000-01-01'),
      techStack: ['JavaScript', 'Python', 'Java', 'React'],
      sosmed: {
        twitter: 'https://twitter.com/techco',
        linkedin: 'https://www.linkedin.com/company/techco',
        facebook: 'https://www.facebook.com/techco',
      },
      teams: [
        {
          name: 'Development',
          members: ['John Doe', 'Jane Smith', 'Bob Johnson'],
        },
        { name: 'Design', members: ['Alice Brown', 'Charlie Davis'] },
      ],
    },
    {
      id: '2',
      image: '/images/stmik.png',
      name: 'DesignHub',
      totalJobs: 20,
      description:
        'A creative design agency passionate about creating unique and impactful designs.',
      website: 'https://www.designhub.com',
      location: 'New York, NY',
      industry: 'Design',
      employee: '200+',
      dateFounded: new Date('2012-05-15'),
      techStack: ['Adobe Creative Suite', 'Figma', 'Sketch', 'Illustrator'],
      sosmed: {
        twitter: 'https://twitter.com/designhub',
        linkedin: 'https://www.linkedin.com/company/designhub',
        instagram: 'https://www.instagram.com/designhub',
      },
      teams: [
        {
          name: 'Graphic Design',
          members: ['Eva Green', 'Sam Wilson', 'Olivia Martinez'],
        },
        { name: 'UI/UX Design', members: ['Alex Turner', 'Sophie White'] },
      ],
    },
    // Add more company entries as needed
  ];

  return (
    <BaseLayout>
      <BreadCrumb items={companyBC} />
      <ExploreDataContainer
        formFilter={formFilter}
        onSubmitFilter={onSubmitFormFilter}
        filterForms={filters}
        title='dream company'
        loading={false}
        subtitle='Explore our list of companies that are looking for talent.'
        type='company'
        data={companyData}
      />
    </BaseLayout>
  );
};

export default PerusahaanModule;
