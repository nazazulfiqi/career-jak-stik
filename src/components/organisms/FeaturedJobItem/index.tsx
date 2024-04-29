import Image from 'next/image';
import React, { FC } from 'react';

import { Badge } from '@/components/ui/badge';

type JobItemProps = {
  id: string;
  categoryId: string;
  userId: string;
  title: string;
  jobType: string;
  skills: string[];
  companyName: string;
  location: any;
};

const JobItem: FC<JobItemProps> = ({
  id,
  categoryId,
  userId,
  title,
  jobType,
  skills,
  companyName,
  location,
}) => {
  const maxSkillsToShow = 2;
  return (
    <div className='border-border cursor-pointer border p-6'>
      <div className='flex flex-row items-start justify-between'>
        <Image
          src='/images/stmik.png'
          alt='Company Logo'
          width={48}
          height={48}
        />
        <span className='text-primary border-primary rounded border px-4 py-1 text-xs font-semibold'>
          {jobType}
        </span>
      </div>
      <div className='my-4'>
        <div className='text-lg font-semibold'>{title}</div>
        <div className='text-muted-foreground mb-3'>
          {companyName} . {location}
        </div>
        <div
          className='text-muted-foreground line-clamp-2 h-12 text-ellipsis'
          dangerouslySetInnerHTML={{ __html: title }}
        ></div>
      </div>
      <div className='space-x-2'>
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
  );
};

export default JobItem;
