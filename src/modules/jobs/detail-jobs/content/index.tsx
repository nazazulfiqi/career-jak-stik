'use client';

import Image from 'next/image';
import { useSession } from 'next-auth/react';
import React, { FC } from 'react';
import Avatar from 'react-avatar';
import { BiCategory } from 'react-icons/bi';

import { formatCurrency } from '@/lib/helper/formatCurrency';

import FormModalApply from '@/components/organisms/FormModalApply';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

import { TGetDetailJob } from '@/types/jobs';

const DetailLowonganContent: FC<{ data: TGetDetailJob }> = ({ data }) => {
  const { data: session } = useSession();

  // console.log(session, status);

  // console.log(data);

  return (
    <section className='mx-auto w-full max-w-[1440px] px-8 md:px-14 lg:px-16 2xl:px-0'>
      <div className='mx-auto mt-6 w-full flex-row items-center justify-between  bg-slate-100 p-12 shadow-md lg:flex'>
        <div className='inline-flex items-center gap-5'>
          {data?.user?.profilePicture ? (
            <Image
              src={data?.user?.profilePicture || '/images/stmik.png'}
              alt='Company Logo'
              width={88}
              height={88}
            />
          ) : (
            <Avatar
              name={data?.user?.name}
              color='#F26800'
              className=' h-[88px] w-[88px] rounded-full'
              size='88'
            />
          )}

          <div>
            <div className='text-2xl font-semibold'>{data.title}</div>
            <div className='text-muted-foreground'>
              Indonesia . {data.jobType}
            </div>
          </div>
        </div>
        {session ? (
          <FormModalApply
            image='/images/stmik.png'
            roles={data.title}
            jobType={data.jobType}
            location='Indonesia'
            id={data.id}
          />
        ) : (
          <Button variant='outline' disabled>
            Sign In First
          </Button>
        )}
      </div>

      <div className='gap-10 py-16 lg:flex lg:flex-row lg:items-start'>
        <div className='w-full lg:w-3/4'>
          <div className='mb-16'>
            <div className='mb-3 text-3xl font-semibold'>Description</div>
            <div
              className='text-muted-foreground'
              dangerouslySetInnerHTML={{ __html: data.description }}
            ></div>
          </div>
          <div className='mb-16'>
            <div className='mb-3 text-3xl font-semibold'>Responsibilities</div>
            <div
              className='text-muted-foreground'
              dangerouslySetInnerHTML={{ __html: data.responsibility }}
            ></div>
          </div>
        </div>
        <div className='w-full lg:w-1/4'>
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
          </div>

          {/* <Separator className='my-10' />

          <div>
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
    </section>
  );
};

export default DetailLowonganContent;
