import { MoreVertical } from 'lucide-react';
import moment from 'moment';
import Link from 'next/link';
import React, { FC } from 'react';

import { dateFormat } from '@/lib/helper';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

import { JOB_LISTINGS_COLUMNS } from '@/constant/perusahaan';

const PerusahaanLowonganPekerjaanContent: FC = () => {
  const jobs: any = [
    {
      roles: 'Software Engineer',
      jobType: 'Full-time',
      datePosted: new Date(),
      dueDate: new Date(),
      applicants: 1,
      needs: 10,
    },
  ];
  return (
    <div>
      <div className='text-3xl font-semibold'>Job Listings</div>
      <div className='mt-10'>
        <Table>
          <TableCaption>A list of your recent invoices.</TableCaption>
          <TableHeader>
            <TableRow>
              {JOB_LISTINGS_COLUMNS.map((item: string, i: number) => (
                <TableHead key={i}>{item}</TableHead>
              ))}
              <TableHead>Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {jobs?.map((item: any, i: number) => (
              <TableRow key={item.roles + 1}>
                <TableCell>{item.roles}</TableCell>
                <TableCell>
                  {moment(item.datePosted).isBefore(item.dueDate) ? (
                    <Badge>Live</Badge>
                  ) : (
                    <Badge variant='destructive'>Expirerd</Badge>
                  )}
                </TableCell>
                <TableCell>{dateFormat(item.datePosted)}</TableCell>
                <TableCell>{dateFormat(item.dueDate)}</TableCell>
                <TableCell>
                  <Badge variant='outline'>{item.jobType}</Badge>
                </TableCell>
                <TableCell>{item.applicants}</TableCell>
                <TableCell>
                  {item.applicants} / {item.needs}
                </TableCell>
                <TableCell>
                  <Button size='icon' variant='outline' asChild>
                    <Link href={`job-listings/detail/${item.id}`}>
                      <MoreVertical className='h-4 w-4' />
                    </Link>
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default PerusahaanLowonganPekerjaanContent;
