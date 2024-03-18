'use client';

import { ArrowLeftIcon } from 'lucide-react';
import Link from 'next/link';
import React, { FC } from 'react';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

import { jobDetailData } from '@/constant/perusahaan';
import Applicants from '@/modules/perusahaan/lowongan-pekerjaan/components/Applicants';
import JobDetail from '@/modules/perusahaan/lowongan-pekerjaan/components/JobDetail';

const LowonganPekerjaanDetailContent: FC = () => {
  const applicant = [
    {
      id: 1,
      name: 'Rizki Adi Saputra',
      phone: '08987654321',
      previousJobTitle: 'Frontend Developer',
      resume: 'asdsa.pdf',
    },
  ];

  return (
    <div>
      <div className='mb-5 inline-flex items-center gap-5'>
        <div>
          <Link href='/perusahaan/lowongan-pekerjaan'>
            <ArrowLeftIcon className='h-9 w-9' />
          </Link>
        </div>
        <div>
          <div className='mb-1 text-2xl font-semibold'>Software Engineer</div>
          <div>
            Technology . Full-time .{' '}
            <span className='text-gray-800'>10/50 Hired</span>
          </div>
        </div>
      </div>
      <Tabs defaultValue='applicants'>
        <TabsList className='mb-8'>
          <TabsTrigger value='applicants'>Applicants</TabsTrigger>
          <TabsTrigger value='jobDetails'>Job Details</TabsTrigger>
        </TabsList>
        <TabsContent value='applicants'>
          <Applicants applicants={applicant} />
        </TabsContent>
        <TabsContent value='jobDetails'>
          <JobDetail detail={jobDetailData} />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default LowonganPekerjaanDetailContent;
