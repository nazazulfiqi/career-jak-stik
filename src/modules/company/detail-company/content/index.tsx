'use client';

import Image from 'next/image';
import Link from 'next/link';
import React, { FC } from 'react';
import Avatar from 'react-avatar';
import { AiOutlineFire } from 'react-icons/ai';
import { BsPeople } from 'react-icons/bs';
import {
  HiOutlineLocationMarker,
  HiOutlineOfficeBuilding,
} from 'react-icons/hi';

import { formatDate } from '@/lib/helper/formatDate';

import { Badge } from '@/components/ui/badge';

import LatestJobSection from '@/modules/landing-page/latest-job';

import { TCompanyDetailItem } from '@/types/company';

interface DetailPerusahaanProps {
  data: TCompanyDetailItem;
}

const DetailPerusahaanContent: FC<DetailPerusahaanProps> = ({ data }) => {
  console.log('detail', data);

  return (
    <section className='mx-auto w-full max-w-[1440px] bg-white px-8 py-4 md:px-14 lg:px-16  2xl:px-0'>
      <div className=''>
        <div className='mt-10 inline-flex items-start gap-6'>
          {data?.profilePicture ? (
            <Image
              src={data?.profilePicture || '/images/stmik.png'}
              alt='Company Logo'
              width={150}
              height={150}
            />
          ) : (
            <Avatar
              name={data?.name}
              color='#F26800'
              className=' h-[150px] w-[150px] rounded-full'
              size='150'
            />
          )}

          <div>
            <div className='inline-flex items-center gap-4'>
              <span className='text-4xl font-semibold'>{data?.name}</span>
              <Badge>20 Jobs</Badge>
            </div>
            <div className='mt-2'>
              <Link href='/' className='text-primary font-semibold'>
                {data.link}
              </Link>
            </div>
            <div className='mt-6 inline-flex items-center gap-10'>
              <div className='inline-flex items-center gap-3'>
                <div>
                  <div className='rounded-full bg-white p-3'>
                    <AiOutlineFire className='text-primary h-6 w-6' />
                  </div>
                </div>
                <div>
                  <div className='text-gray-500'>Founded</div>
                  <div className='font-semibold'>
                    {data.dateFounded ? formatDate(data.dateFounded) : '-'}
                  </div>
                </div>
              </div>
              <div className='inline-flex items-center gap-3'>
                <div>
                  <div className='rounded-full bg-white p-3'>
                    <BsPeople className='text-primary h-6 w-6' />
                  </div>
                </div>
                <div>
                  <div className='text-gray-500'>Employees</div>
                  <div className='font-semibold'>
                    {data.employeeTotal ? data.employeeTotal : '-'}
                  </div>
                </div>
              </div>
              <div className='inline-flex items-center gap-3'>
                <div>
                  <div className='rounded-full bg-white p-3'>
                    <HiOutlineLocationMarker className='text-primary h-6 w-6' />
                  </div>
                </div>
                <div>
                  <div className='text-gray-500'>Location</div>
                  <div className='font-semibold'>
                    {data.location ? data.location : '-'}
                  </div>
                </div>
              </div>
              <div className='inline-flex items-center gap-3'>
                <div>
                  <div className='rounded-full bg-white p-3'>
                    <HiOutlineOfficeBuilding className='text-primary h-6 w-6' />
                  </div>
                </div>
                <div>
                  <div className='text-gray-500'>Industry</div>
                  <div className='font-semibold'>
                    {data.industry ? data.industry : '-'}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='flex flex-row items-start gap-10 bg-white py-16'>
          <div className='w-3/4'>
            <div className='mb-16'>
              <div className='mb-3 text-3xl font-semibold'>Company Profile</div>
              <div
                className='text-justify text-black'
                dangerouslySetInnerHTML={{
                  __html: data.about
                    ? data.about
                    : 'Deskripsi Tidak Ditampilkan',
                }}
              ></div>
            </div>
            {/* {data.CompanySocialMedia && (
            <div>
              <div className='mb-4 text-3xl font-semibold'>Contact</div>
              <div className='flex w-[400px] flex-wrap items-center gap-5'>
                <div className='border-primary text-primary inline-flex w-max items-center gap-3 border p-2 font-semibold'>
                  <FacebookIcon />
                  <span className='text-sm'>https://jakstik.ac.id</span>
                </div>
                <div className='border-primary text-primary inline-flex w-max items-center gap-3 border p-2 font-semibold'>
                  <TwitterIcon />
                  <span className='text-sm'>https://jakstik.ac.id</span>
                </div>
                <div className='border-primary text-primary inline-flex w-max items-center gap-3 border p-2 font-semibold'>
                  <LinkedinIcon />
                  <span className='text-sm'>https://jakstik.ac.id</span>
                </div>
              </div>
            </div>
            )} */}
          </div>
          <div className='w-1/4'>
            <div className='mb-4 text-3xl font-semibold'>Tech Stack</div>
            <div className='text-sm text-gray-500'>
              Learn about the technology and tools that Pattern uses.
            </div>
            {data?.techStack && data.techStack.length > 0 ? (
              <div className='mt-5 flex flex-row flex-wrap items-center gap-4'>
                {data.techStack.map((i: string) => (
                  <Badge key={i}>{i}</Badge>
                ))}
              </div>
            ) : (
              <div className='mt-5 text-sm text-black'>
                Tech Stack Tidak Ditampilkan
              </div>
            )}
          </div>
        </div>

        {/* <div className=''>
          <Separator />
          <div className='my-16'>
            <div className='mb-4 text-3xl font-semibold'>Teams</div>
            <div className='mt-5 grid grid-cols-5 gap-5'>
              {[0, 1, 2, 3, 4].map((i: number) => (
                <div key={i} className='border-border border px-3 py-5'>
                  <div className='mx-auto h-16 w-16 rounded-full bg-gray-300' />

                  <div className='my-4 text-center'>
                    <div className='text-sm font-semibold'>Naza Zulfiqi</div>
                    <div className='text-xs text-gray-500'>
                      Frontend Developer
                    </div>
                  </div>

                  <div className='mx-auto w-max'>
                    <div className='inline-flex gap-2'>
                      <InstagramIcon className='h-4 w-4 text-gray-500' />
                      <LinkedinIcon className='h-4 w-4 text-gray-500' />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <Separator />
        </div> */}
        <LatestJobSection />
      </div>
    </section>
  );
};

export default DetailPerusahaanContent;
