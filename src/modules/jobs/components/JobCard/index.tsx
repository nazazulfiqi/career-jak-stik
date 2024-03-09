import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { FC } from 'react';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Separator } from '@/components/ui/separator';

import { JobType } from '@/types';

type JobCardProps = JobType;

const JobCard: FC<JobCardProps> = ({
  applicants,
  skills,
  image,
  jobType,
  location,
  name,
  needs,
  type,
  id,
}) => {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push('/cari-lowongan/' + id)}
      className='border-border flex w-full flex-row items-center justify-between border p-6'
    >
      <div className='flex flex-row items-start gap-6'>
        <div>
          <Image src={image} alt={image} width={64} height={64} />
        </div>
        <div>
          <div className='text-lg font-semibold'>{name}</div>
          <div className='text-muted-foreground mb-2 text-sm'>
            {type} . {location}
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
        <Button className='w-full' size='lg'>
          Apply
        </Button>
        <Progress value={(applicants / needs) * 100} className='mt-2' />
        <div className='mt-2 text-center text-sm text-gray-500'>
          <span className='font-semibold text-black'>{applicants} applied</span>{' '}
          of {needs} capacity
        </div>
      </div>
    </div>
  );
};

export default JobCard;
