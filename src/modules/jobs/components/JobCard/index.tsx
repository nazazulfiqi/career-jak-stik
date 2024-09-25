import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { FC } from 'react';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

import { TGetAllJob } from '@/types/jobs';

const JobCard: FC<TGetAllJob> = ({
  id,
  categoryId,
  userId,
  title,
  jobType,
  skills,
  companyName,
  location,
  companyPicture,
}) => {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push('/cari-lowongan/' + id)}
      className='border-border flex w-full flex-row items-center justify-between border p-6'
    >
      <div className='flex flex-row items-start gap-6'>
        <div>
          <Image
            src={companyPicture || '/images/stmik.png'}
            alt='Company Logo'
            width={64}
            height={64}
          />
        </div>
        <div>
          <div className='text-lg font-semibold'>{title}</div>
          <div className='text-muted-foreground mb-2 text-sm'>
            {jobType} . {location}
          </div>
          <div className='inline-flex h-5 items-center gap-2'>
            <Badge variant='secondary'>{jobType}</Badge>
            <Separator orientation='vertical' />
            {skills.map((item: string, i: number) => (
              <Badge key={i}>{item}</Badge>
            ))}
          </div>
        </div>
      </div>
      <div className='w-[200px]'>
        <Button className='w-full' size='lg' asChild>
          <Link href={`/cari-lowongan/${id}`}>Apply</Link>
        </Button>
        {/* <Progress value={(10 / 50) * 100} className='mt-2 h-2' />
        <div className='mt-2 text-center text-sm text-gray-500'>
          <span className='font-semibold text-black'>10 applied</span> of 50
          capacity
        </div> */}
      </div>
    </div>
  );
};

export default JobCard;
