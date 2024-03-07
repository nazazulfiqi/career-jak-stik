import Image from 'next/image';
import React, { FC } from 'react';

import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

import { JobType } from '@/types';

type JobItemProps = JobType;

const JobItem: FC<JobItemProps> = ({
  image,
  jobType,
  location,
  name,
  type,
  skills,
}) => {
  const maxSkillsToShow = 1;
  return (
    <div className='border-border flex cursor-pointer flex-row items-start gap-6 border p-8'>
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
    </div>
  );
};

export default JobItem;
