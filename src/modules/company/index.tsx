'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import React, { FC } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { useGetAllCompany } from '@/hooks/company/hook';

import { BreadCrumb } from '@/components/atoms/bread-crumb';
import { BaseLayout } from '@/components/layouts/base/base';
import ExploreDataContainer from '@/containers/ExploreDataContainers';

import { formFilterCompanySchema } from '@/validations/form-schema';

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

  const formFilter = useForm<z.infer<typeof formFilterCompanySchema>>({
    resolver: zodResolver(formFilterCompanySchema),
    defaultValues: {
      industry: [],
    },
  });

  const onSubmit = async (val: z.infer<typeof formFilterCompanySchema>) => {
    console.log(val);
  };

  const filters = [
    {
      name: 'industry',
      label: 'Industri',
      items: [
        { id: 'Technology', label: 'Technology' },
        { id: 'Business', label: 'Business' },
        { id: 'Blockchain', label: 'Blockchain' },
        { id: 'Cloud', label: 'Cloud' },
        { id: 'Consumer Tech', label: 'Consumer Tech' },
        { id: 'Education', label: 'Education' },
        { id: 'Fintech', label: 'Fintech' },
        { id: 'Gaming', label: 'Gaming' },
        { id: 'Food & Beverage', label: 'Food & Beverage' },
        { id: 'Healthcare', label: 'Healthcare' },
        { id: 'Hosting', label: 'Hosting' },
        { id: 'Media', label: 'Media' },
      ],
    },
  ];

  const { data, isLoading } = useGetAllCompany();

  return (
    <BaseLayout>
      <BreadCrumb items={companyBC} />
      <ExploreDataContainer
        formFilter={formFilter}
        onSubmitFilter={onSubmit}
        filterForms={filters}
        title='dream company'
        loading={isLoading}
        subtitle='Explore our list of companies that are looking for talent.'
        type='company'
        data={data?.data || []}
      />
    </BaseLayout>
  );
};

export default PerusahaanModule;
