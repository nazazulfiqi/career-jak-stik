import { PartyPopper } from 'lucide-react';
import React, { FC } from 'react';

import { dateFormat } from '@/lib/helper';

import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Separator } from '@/components/ui/separator';

type JObDetailType = {
  CategoryJob: any;
};

interface JobDetailProps {
  detail: any;
}

const JobDetail: FC<JobDetailProps> = ({ detail }) => {
  const benefits: any = detail?.benefits;
  return (
    <div>
      <div className='grid w-full grid-cols-3 gap-5'>
        <div className='col-span-2 space-y-10'>
          <div>
            <div className='text-3xl font-semibold'>Description</div>
            <div
              className='mt-3 text-gray-800'
              dangerouslySetInnerHTML={{ __html: detail?.description }}
            ></div>
          </div>
          <div>
            <div className='text-3xl font-semibold'>Responsibilities</div>
            <div
              className='mt-3 text-gray-800'
              dangerouslySetInnerHTML={{
                __html: detail?.responsibility || '',
              }}
            ></div>
          </div>
          <div>
            <div className='text-3xl font-semibold'>Who You Are</div>
            <div
              className='mt-3 text-gray-800'
              dangerouslySetInnerHTML={{
                __html: detail?.whoYouAre || '',
              }}
            ></div>
          </div>
          <div>
            <div className='text-3xl font-semibold'>Nice-To-Haves</div>
            <div
              className='mt-3 text-gray-800'
              dangerouslySetInnerHTML={{
                __html: detail?.niceToHaves || '',
              }}
            ></div>
          </div>
        </div>
        <div>
          <div className='text-3xl font-semibold'>About this role</div>

          <div className='my-6 bg-gray-100 p-3 text-center'>
            {detail?.applicants}{' '}
            <span className='text-gray-800'>of {detail?.needs} capacity</span>
            <Progress
              className='mt-3 bg-gray-200'
              value={(detail?.applicants || 0) / (detail?.needs || 0) / 100}
            />
          </div>

          <div className='mb-10 space-y-5'>
            <div className='flex justify-between'>
              <div className='text-gray-800'>Apply Before</div>
              <div className='font-semibold'>{dateFormat(detail?.dueDate)}</div>
            </div>
            <div className='flex justify-between'>
              <div className='text-gray-800'>Job Post On</div>
              <div className='font-semibold'>
                {dateFormat(detail?.datePosted)}
              </div>
            </div>
            <div className='flex justify-between'>
              <div className='text-gray-800'>Job Type</div>
              <div className='font-semibold'>{detail?.jobType}</div>
            </div>
            <div className='flex justify-between'>
              <div className='text-gray-800'>Salary</div>
              <div className='font-semibold'>
                ${detail?.salaryFrom} - ${detail?.salaryTo} USD
              </div>
            </div>
          </div>

          <Separator />

          <div className='my-10'>
            <div className='mb-4 text-3xl font-semibold'>Categories</div>

            <div className='space-x-5'>
              <Badge>{detail?.CategoryJob?.name}</Badge>
            </div>
          </div>

          <Separator />

          <div className='my-10'>
            <div className='mb-4 text-3xl font-semibold'>Required Skills</div>

            <div className='space-x-5'>
              {detail?.requiredSkills.map((item: string, i: number) => (
                <Badge variant='outline' key={i}>
                  {item}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Separator className='my-8' />

      <div>
        <div className='text-3xl font-semibold'>Perks & Benefits</div>
        <div className='text-gray-800'>
          This job comes with several perks and benefits
        </div>

        <div className='mt-9 grid grid-cols-4 gap-5'>
          {benefits?.map((item: any) => (
            <div key={item}>
              <PartyPopper className='text-primary mb-6 h-10 w-10' />

              <div className='mb-3 text-lg font-semibold'>{item.benefit}</div>
              <div className='text-gray-800'>{item.description}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JobDetail;
