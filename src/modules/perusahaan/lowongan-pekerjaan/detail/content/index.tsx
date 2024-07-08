'use client';

import { ArrowLeftIcon } from 'lucide-react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import React, { FC } from 'react';

import { useGetDetailJob } from '@/hooks/jobs/hook';
import { useApplicantByJobIdState } from '@/hooks/perusahaan/jobs/hook';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

import Applicants from '@/modules/perusahaan/lowongan-pekerjaan/components/Applicants';
import JobDetail from '@/modules/perusahaan/lowongan-pekerjaan/components/JobDetail';

const LowonganPekerjaanDetailContent: FC = () => {
  const params = useParams();

  console.log(params);

  const { data, isLoading } = useGetDetailJob(String(params.id));

  const { getApplicantByJobIdData } = useApplicantByJobIdState();

  const applicantData = getApplicantByJobIdData?.data;

  console.log(applicantData);

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
          <div className='mb-1 text-2xl font-semibold'>{data?.data?.title}</div>
          <div>
            {data?.data?.categoryId} . {data?.data?.jobType} .{' '}
            {/* <span className='text-gray-800'>10/50 Hired</span> */}
          </div>
        </div>
      </div>
      <Tabs defaultValue='applicants'>
        <TabsList className='mb-8'>
          <TabsTrigger value='applicants'>Applicants</TabsTrigger>
          <TabsTrigger value='jobDetails'>Job Details</TabsTrigger>
        </TabsList>
        <TabsContent value='applicants'>
          <Applicants applicants={applicantData} />
        </TabsContent>
        <TabsContent value='jobDetails'>
          {data ? (
            <JobDetail data={data?.data} />
          ) : (
            <p>Detail tidak ditemukan.</p>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default LowonganPekerjaanDetailContent;
