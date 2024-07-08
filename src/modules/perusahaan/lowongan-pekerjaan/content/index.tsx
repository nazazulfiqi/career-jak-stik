import Link from 'next/link';
import React, { FC } from 'react';
import { MdOutlineLaunch } from 'react-icons/md';

import { formatCurrency } from '@/lib/helper/formatCurrency';

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

import { TGetAllJobCompanyItem } from '@/types/perusahaan/lowongan';

interface AllJobCompanyProps {
  data: TGetAllJobCompanyItem[]; // menambahkan prop isLoading dengan tipe boolean
}

const PerusahaanLowonganPekerjaanContent: FC<AllJobCompanyProps> = ({
  data,
}) => {
  console.log(data);

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
          <TableCaption>A list of your jobs that you have posted.</TableCaption>
          <TableHeader>
            <TableRow>
              {JOB_LISTINGS_COLUMNS.map((item: string, i: number) => (
                <TableHead key={i}>{item}</TableHead>
              ))}
              <TableHead>Detail</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data?.map((item: any, i: number) => (
              <TableRow key={item.id}>
                <TableCell>{item.title}</TableCell>
                {/* <TableCell>
                  {moment(item.datePosted).isBefore(item.dueDate) ? (
                    <Badge>Live</Badge>
                  ) : (
                    <Badge variant='destructive'>Expirerd</Badge>
                  )}
                </TableCell> */}
                {/* <TableCell>{dateFormat(item.datePosted)}</TableCell>
                <TableCell>{dateFormat(item.dueDate)}</TableCell> */}
                <TableCell>{formatCurrency(item.salaryFrom)}</TableCell>
                <TableCell>{formatCurrency(item.salaryTo)}</TableCell>
                <TableCell>
                  <Badge variant='outline'>{item.jobType}</Badge>
                </TableCell>
                <TableCell>
                  <Button size='icon' variant='outline' asChild>
                    <Link href={`lowongan-pekerjaan/${item.id}`}>
                      <MdOutlineLaunch className='h-4 w-4' />
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
