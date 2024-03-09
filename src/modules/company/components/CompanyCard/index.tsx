import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { FC } from 'react';

import { Badge } from '@/components/ui/badge';

import { CompanyType } from '@/types';

type CompanyCardProps = CompanyType;

const CompanyCard: FC<CompanyCardProps> = ({
  industry,
  description,
  image,
  name,
  totalJobs,
  id,
}) => {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push('/detail/company/' + id)}
      className='border-border cursor-pointer border p-6'
    >
      <div className='flex flex-row items-start justify-between'>
        <Image src={image} alt={image} width={66} height={66} />
        <Badge>{totalJobs} Jobs</Badge>
      </div>
      <div className='my-4'>
        <div className='mb-2 text-lg font-semibold'>{name}</div>
        <div
          className='text-muted-foreground line-clamp-3 text-sm'
          dangerouslySetInnerHTML={{ __html: description }}
        ></div>
      </div>
      <div className='space-x-2'>
        <Badge variant='outline'>{industry}</Badge>
      </div>
    </div>
  );
};

export default CompanyCard;
