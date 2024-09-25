'use client';

import React, { FC } from 'react';

import {
  useCompanySettingState,
  useGetIndustries,
} from '@/hooks/perusahaan/setting/hook';

import OverviewForm from '@/modules/perusahaan/pengaturan/components/overview-form';

interface CompanySettingProps {
  isLoading: boolean;
}

const PerusahaanPengaturanContent: FC<CompanySettingProps> = ({
  isLoading,
}) => {
  const { getCompanySettingData } = useCompanySettingState();

  const { data: industryData } = useGetIndustries();

  console.log(industryData);

  return (
    <section>
      <div className='mb-5 text-3xl font-semibold'>Pengaturan</div>
      {/* <Tabs defaultValue='overview'>
        <TabsList className='mb-8'>
          <TabsTrigger value='overview'>Overview</TabsTrigger>
          <TabsTrigger value='socialLinks'>Social Links</TabsTrigger>
          <TabsTrigger value='teams'>Teams</TabsTrigger>
        </TabsList>
        <TabsContent value='overview'> */}
      <OverviewForm
        data={getCompanySettingData?.data}
        isLoading={isLoading}
        industryData={industryData?.data}
      />
      {/* </TabsContent>
        <TabsContent value='socialLinks'>
          <SocialMediaForm />
        </TabsContent>
        <TabsContent value='teams'>
          <TeamForm />
        </TabsContent>
      </Tabs> */}
    </section>
  );
};

export default PerusahaanPengaturanContent;
