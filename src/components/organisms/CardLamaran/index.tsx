import Image from 'next/image';
import React, { FC } from 'react';

import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

const CardLamaran: FC = () => {
  return (
    <Card>
      <CardHeader className=''>
        <div className='flex justify-between gap-2'>
          <div className='flex items-center gap-4'>
            <Image
              src='/images/stmik.png'
              alt='Company Logo'
              width={50}
              height={50}
            />
            <div>
              <p className='text-base font-semibold'>Software Engineer</p>
              <p className='text-muted-foreground mb-2 text-sm'>
                Fulltime . Jakarta
              </p>
            </div>
          </div>

          <div>
            <Badge className='font-normal '>Diterima</Badge>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <p className='text-sm'>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed at rerum
          maiores, accusamus minus impedit?...
        </p>
      </CardContent>
    </Card>
  );
};

export default CardLamaran;
