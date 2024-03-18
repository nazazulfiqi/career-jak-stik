'use client';

import React, { FC } from 'react';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

import OverviewForm from '@/modules/perusahaan/pengaturan/components/overview-form';
import SocialMediaForm from '@/modules/perusahaan/pengaturan/components/socialmedia-form';
import TeamForm from '@/modules/perusahaan/pengaturan/components/team-form';

const PerusahaanPengaturanContent: FC = () => {
  return (
    <section>
      <div className='mb-5 text-3xl font-semibold'>Pengaturan</div>
      <Tabs defaultValue='overview'>
        <TabsList className='mb-8'>
          <TabsTrigger value='overview'>Overview</TabsTrigger>
          <TabsTrigger value='socialLinks'>Social Links</TabsTrigger>
          <TabsTrigger value='teams'>Teams</TabsTrigger>
        </TabsList>
        <TabsContent value='overview'>
          <OverviewForm />
        </TabsContent>
        <TabsContent value='socialLinks'>
          <SocialMediaForm />
        </TabsContent>
        <TabsContent value='teams'>
          <TeamForm />
        </TabsContent>
      </Tabs>
    </section>
  );
};

export default PerusahaanPengaturanContent;
