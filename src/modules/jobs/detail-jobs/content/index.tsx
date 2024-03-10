'use client';

import Image from 'next/image';
import React, { FC } from 'react';
import { BiCategory } from 'react-icons/bi';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Separator } from '@/components/ui/separator';

const DetailLowonganContent: FC = () => {
  return (
    <section className='mx-auto w-full max-w-[1440px] px-8 md:px-14 lg:px-16 2xl:px-0'>
      <div className='mx-auto mt-6 w-full flex-row items-center justify-between  bg-slate-100 p-12 shadow-md lg:flex'>
        <div className='inline-flex items-center gap-5'>
          <Image
            src='/images/stmik.png'
            alt='Company Logo'
            width={88}
            height={88}
          />
          <div>
            <div className='text-2xl font-semibold'>Front End Developer</div>
            <div className='text-muted-foreground'>Indonesia . Fulltime</div>
          </div>
        </div>
        {/* {session ? (
            <>
              {data.isApply === 1 ? (
                <Button disabled className="text-lg px-12 py-6 bg-green-500">
                  Applied
                </Button>
              ) : (
              <FormModalApply
                image={data.image}
                roles={data.roles!!}
                jobType={data.jobType!!}
                location={data?.Company?.Companyoverview[0]?.location}
                id={data.id}
              />
               )} }
            </>
          ) : (
            <Button variant="outline" disabled>
              Sign In First
            </Button>
          )} */}
        <Button variant='outline' disabled>
          Sign In First
        </Button>
      </div>

      <div className='gap-10 py-16 lg:flex lg:flex-row lg:items-start'>
        <div className='w-full lg:w-3/4'>
          <div className='mb-16'>
            <div className='mb-3 text-3xl font-semibold'>Description</div>
            <div className='text-muted-foreground'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Recusandae libero veniam delectus quisquam tempore dolorum, quia
              sint cumque voluptatem nam.
            </div>
          </div>
          <div className='mb-16'>
            <div className='mb-3 text-3xl font-semibold'>Responsibilities</div>
            <div className='text-muted-foreground'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
              exercitationem et quos nulla alias, ad corrupti! Nisi aperiam
              autem corrupti.
            </div>
          </div>

          <div className='mb-16'>
            <div className='mb-3 text-3xl font-semibold'>Who You Are</div>
            <div className='text-muted-foreground'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita
              cupiditate ullam numquam quae nobis ea dolor eum quis laborum
              sapiente debitis maiores fuga, nulla amet repellat facere culpa
              laudantium dolore.
            </div>
          </div>

          <div className='mb-16'>
            <div className='mb-3 text-3xl font-semibold'>Nice-To-Haves</div>
            <div className='text-muted-foreground'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut
              modi, eligendi dolor et fugit architecto reiciendis nulla
              consequuntur ipsa blanditiis!
            </div>
          </div>
        </div>
        <div className='w-full lg:w-1/4'>
          <div>
            <div className='text-3xl font-semibold'>About this role</div>

            <div className='mt-6 bg-slate-50 p-4'>
              <div className='mb-2'>
                <span className='font-semibold'>1 Applied</span>{' '}
                <span className='text-gray-600'>of 10 capacity</span>
              </div>
              <Progress value={2} />
            </div>

            <div className='mt-6 space-y-4'>
              <div className='flex flex-row justify-between'>
                <div className='text-gray-500'>Apply Before</div>
                <div className='font-semibold'>31 Mar 2024</div>
              </div>
              <div className='flex flex-row justify-between'>
                <div className='text-gray-500'>Job Posted On</div>
                <div className='font-semibold'>31 Mar 2024</div>
              </div>
              <div className='flex flex-row justify-between'>
                <div className='text-gray-500'>Job Type</div>
                <div className='font-semibold'>Fulltime</div>
              </div>
              <div className='flex flex-row justify-between'>
                <div className='text-gray-500'>Salary</div>
                <div className='font-semibold'>$100-$1000 USD</div>
              </div>
            </div>
          </div>

          <Separator className='my-10' />

          <div>
            <div className='text-3xl font-semibold'>Category</div>
            <div className='my-10 inline-flex gap-4'>
              <Badge>Technology</Badge>
            </div>
          </div>

          <Separator className='my-10' />

          <div className='w-full'>
            <div className='text-3xl font-semibold'>Required Skills</div>
            <div className='my-10 inline-flex flex-wrap gap-4'>
              {[0, 1, 2, 4].map((item: any, i: number) => (
                <Badge variant='outline' key={item + i}>
                  javascript
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
          {[0, 1, 2].map((item: any, i: number) => (
            <div key={i}>
              <BiCategory className='text-primary h-12 w-12' />
              <div className='mt-6 text-xl font-semibold'>Benefit {i + 1}</div>
              <div className='mt-3 text-sm text-gray-500'>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta,
                blanditiis.
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DetailLowonganContent;
