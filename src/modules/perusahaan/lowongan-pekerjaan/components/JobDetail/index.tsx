import React, { FC } from 'react';
import { BiCategory } from 'react-icons/bi';

import { formatCurrency } from '@/lib/helper/formatCurrency';

import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

import { TGetDetailJob } from '@/types/jobs';

const JobDetail: FC<{ data: TGetDetailJob }> = ({ data }) => {
  return (
    <div>
      <div className='grid w-full grid-cols-3 gap-5'>
        <div className='col-span-2 space-y-10'>
          <div>
            <div className='text-3xl font-semibold'>Description</div>
            <div
              className='mt-3 text-gray-800'
              dangerouslySetInnerHTML={{ __html: data?.description }}
            ></div>
          </div>
          <div>
            <div className='mb-3 text-3xl font-semibold'>Responsibilities</div>
            <div
              className='text-muted-foreground'
              dangerouslySetInnerHTML={{ __html: data?.responsibility }}
            ></div>
          </div>
        </div>
        <div>
          <div className='text-3xl font-semibold'>About this role</div>

          {/* <div className='mt-6 bg-slate-50 p-4'>
            <div className='mb-2'>
              <span className='font-semibold'>1 Applied</span>{' '}
              <span className='text-gray-600'>of 10 capacity</span>
            </div>
            <Progress value={2} />
          </div> */}

          <div className='mt-6 space-y-4'>
            {/* <div className='flex flex-row justify-between'>
              <div className='text-gray-500'>Apply Before</div>
              <div className='font-semibold'>31 Mar 2024</div>
            </div>
            <div className='flex flex-row justify-between'>
              <div className='text-gray-500'>Job Posted On</div>
              <div className='font-semibold'>31 Mar 2024</div>
            </div> */}
            <div className='flex flex-row justify-between'>
              <div className='text-gray-500'>Job Type</div>
              <div className='font-semibold'>{data.jobType}</div>
            </div>
            <div className='flex flex-row justify-between'>
              <div className='text-gray-500'>Salary</div>
              <div className='font-semibold'>
                {formatCurrency(Number(data.salaryFrom))} -{' '}
                {formatCurrency(Number(data.salaryTo))}
              </div>
            </div>
          </div>
          {/* 
          <Separator className='my-10' /> */}

          {/* <div>
            <div className='text-3xl font-semibold'>Category</div>
            <div className='my-10 inline-flex gap-4'>
              <Badge>Technology</Badge>
            </div>
          </div> */}

          <Separator className='my-10' />

          <div className='w-full'>
            <div className='text-3xl font-semibold'>Required Skills</div>
            <div className='my-10 inline-flex flex-wrap gap-4'>
              {data?.skills?.map((item: string, i: number) => (
                <Badge variant='outline' key={item + i}>
                  {item}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className='pb-16'>
        <Separator className='mb-14' />

        <div className='mb-6'>
          <div className=' text-3xl font-semibold'>Perks & Benefits</div>
          <div className='mt-1 text-gray-500'>
            This job comes with several perks and benefits
          </div>
        </div>

        <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-5'>
          {data?.benefit?.map((item: string, i: number) => (
            <div key={i}>
              <BiCategory className='text-primary h-12 w-12' />
              <div className='mt-6 text-xl font-semibold'>Benefit {i + 1}</div>
              <div className='mt-3 text-sm text-gray-500'>{item}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JobDetail;
