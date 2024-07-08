import Link from 'next/link';
import React, { FC } from 'react';
import { MdClose, MdDone } from 'react-icons/md';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

import { JOB_APPLICANTS_COLUMNS } from '@/constant/perusahaan';
import { ModalApprove } from '@/modules/perusahaan/lowongan-pekerjaan/components/Applicants/modal-approve';
import { ModalReject } from '@/modules/perusahaan/lowongan-pekerjaan/components/Applicants/modal-reject';

import { TGetAllApplicantItem } from '@/types/perusahaan/lowongan';

interface ApplicantsProps {
  applicants: TGetAllApplicantItem[];
}

const Applicants: FC<ApplicantsProps> = ({ applicants }) => {
  const [status, setStatus] = React.useState<string>('SUBMITTED');

  return (
    <Table>
      <TableHeader>
        <TableRow>
          {JOB_APPLICANTS_COLUMNS.map((item: string, i: number) => (
            <TableHead key={i}>{item}</TableHead>
          ))}
          <TableHead>Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {applicants && applicants?.length > 0 ? (
          <>
            {applicants?.map((item: TGetAllApplicantItem) => (
              <TableRow key={item.id + 1}>
                <TableCell>{item.name}</TableCell>
                <TableCell>{item.email}</TableCell>
                <TableCell>{item.phoneNumber}</TableCell>

                <TableCell>
                  <Link
                    href={item.resume}
                    className='text-primary-base'
                    target='_blank'
                  >
                    Download Resume
                  </Link>
                </TableCell>

                <TableCell className='flex gap-2'>
                  {status === 'SUBMITTED' && (
                    <>
                      <ModalApprove
                        jobId='1'
                        modalTrigger={
                          <Button
                            size='icon'
                            variant='default'
                            className='rounded-full bg-green-700 p-2 hover:bg-green-800'
                            asChild
                          >
                            <MdDone className='h-8 w-8 font-bold' />
                          </Button>
                        }
                      />

                      <ModalReject
                        jobId='1'
                        modalTrigger={
                          <Button
                            size='icon'
                            variant='default'
                            asChild
                            className='rounded-full bg-red-700 p-2 hover:bg-red-800'
                          >
                            <MdClose className='h-8 w-8' />
                          </Button>
                        }
                      />
                    </>
                  )}
                  {status === 'APPROVED' && (
                    <Badge
                      variant='default'
                      className=' bg-green-700 text-white hover:bg-green-800'
                    >
                      Diterima
                    </Badge>
                  )}
                  {status === 'REJECT' && (
                    <Badge variant='destructive'>Ditolak</Badge>
                  )}
                  {status === 'REVIEW' && (
                    <>
                      <ModalApprove
                        jobId='1'
                        modalTrigger={
                          <Button
                            size='icon'
                            variant='default'
                            className='rounded-full bg-green-700 p-2 hover:bg-green-800'
                            asChild
                          >
                            <MdDone className='h-8 w-8 font-bold' />
                          </Button>
                        }
                      />

                      <ModalReject
                        jobId='1'
                        modalTrigger={
                          <Button
                            size='icon'
                            variant='default'
                            asChild
                            className='rounded-full bg-red-700 p-2 hover:bg-red-800'
                          >
                            <MdClose className='h-8 w-8' />
                          </Button>
                        }
                      />
                    </>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </>
        ) : (
          <TableRow>
            <TableCell colSpan={5} className='text-center'>
              Tidak ada pelamar dalam lowongan ini.
            </TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
};

export default Applicants;
