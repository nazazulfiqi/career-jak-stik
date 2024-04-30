import Image from 'next/image';
import Link from 'next/link';
import React, { FC } from 'react';

import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

import { TGetAllJob } from '@/types/jobs';

const JobItem: FC<TGetAllJob> = ({
  id,
  categoryId,
  userId,
  title,
  jobType,
  skills,
  companyName,
  location,
}) => {
  const maxSkillsToShow = 1;
  return (
    <Link
      href={`/cari-lowongan/${id}`}
      className='border-border flex cursor-pointer flex-row items-start gap-6 border p-8'
    >
      <div>
        <Image
          src='/images/stmik.png'
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
          {skills.slice(0, maxSkillsToShow).map((item: string, i: number) => (
            <Badge
              key={item + i}
              variant='outline'
              className='border-primary bg-primary/5 text-primary rounded'
            >
              {item}
            </Badge>
          ))}
        </div>
      </div>
    </Link>
  );
};

export default JobItem;
