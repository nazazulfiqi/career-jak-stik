import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { FC } from 'react';

import { Badge } from '@/components/ui/badge';

import { TCompanyDetailItem } from '@/types/company';

const CompanyCard: FC<TCompanyDetailItem> = ({
  industry,
  about,
  name,
  id,
  location,
  profilePicture,
}) => {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push('/cari-perusahaan/' + id)}
      className='border-border cursor-pointer border p-6'
    >
      <div className='flex flex-row items-start justify-between'>
        <Image
          src={profilePicture ? profilePicture : '/images/stmik.png'}
          alt='Company Logo'
          width={66}
          height={66}
        />
        <Badge>{location ? location : 'Indonesia'}</Badge>
      </div>
      <div className='my-4'>
        <div className='mb-2 text-lg font-semibold'>{name}</div>
        <div
          className='text-muted-foreground line-clamp-3 text-sm'
          dangerouslySetInnerHTML={{
            __html: about ? about : 'Deskripsi tidak ditampilkan',
          }}
        ></div>
      </div>
      <div className='space-x-2'>
        <Badge variant='outline'>
          {industry ? industry : 'Industri tidak ditentukan'}
        </Badge>
      </div>
    </div>
  );
};

export default CompanyCard;
