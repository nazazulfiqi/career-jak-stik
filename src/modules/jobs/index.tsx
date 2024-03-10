'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import React, { FC } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { BreadCrumb } from '@/components/atoms/bread-crumb';
import { BaseLayout } from '@/components/layouts/base/base';
import ExploreDataContainer from '@/containers/ExploreDataContainers';

import { formFilterSchema } from '@/validations/form-schema';

const LowonganModule: FC = () => {
  const jobsBC = [
    {
      name: 'Beranda',
      link: '/',
    },
    {
      name: 'Lowongan',
      link: '/cari-lowongan',
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
      name: 'categories',
      label: 'Kategori',
      items: [
        {
          id: 'kt1',
          label: 'Technology',
        },
        {
          id: 'kt2',
          label: 'Graphic Design',
        },
        {
          id: 'kt3',
          label: 'Sales',
        },
      ],
    },
  ];

  const jobData = [
    {
      id: '1',
      image: '/images/stmik.png',
      jobType: 'Full-time',
      name: 'Software Engineer',
      type: 'Engineering',
      location: 'San Francisco, CA',
      desc: 'We are looking for a skilled software engineer to join our dynamic team.',
      category: 'Technology',
      needs: 3,
      applicants: 10,
      skills: ['JavaScript', 'React', 'Node.js'],
    },
    {
      id: '2',
      image: '/images/stmik.png',
      jobType: 'Part-time',
      name: 'Graphic Designer',
      type: 'Design',
      location: 'New York, NY',
      desc: 'Join our design team and create visually stunning graphics for our projects.',
      category: 'Design',
      needs: 2,
      applicants: 5,
      skills: ['Adobe Photoshop', 'Illustrator', 'UI/UX Design'],
    },
    // Add more job entries as needed
  ];

  return (
    <BaseLayout>
      <BreadCrumb items={jobsBC} />
      <ExploreDataContainer
        formFilter={formFilter}
        onSubmitFilter={onSubmitFormFilter}
        filterForms={filters}
        title='dream jobs'
        loading={false}
        subtitle='Find your dream job with our job search engine.'
        type='job'
        data={jobData}
      />
    </BaseLayout>
  );
};

export default LowonganModule;
