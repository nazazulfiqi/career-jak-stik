'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import React, { FC } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { useGetAllJob } from '@/hooks/jobs/hook';

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

  const { data, isLoading } = useGetAllJob();

  return (
    <BaseLayout>
      <BreadCrumb items={jobsBC} />

      <ExploreDataContainer
        formFilter={formFilter}
        onSubmitFilter={onSubmitFormFilter}
        filterForms={filters}
        title='dream jobs'
        loading={isLoading}
        subtitle='Find your dream job with our job search engine.'
        type='job'
        data={data?.data || []}
      />
    </BaseLayout>
  );
};

export default LowonganModule;
