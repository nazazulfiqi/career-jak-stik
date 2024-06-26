import React, { FC } from 'react';
import { MdClose, MdDone } from 'react-icons/md';

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

interface ApplicantsProps {
  applicants: any;
}

const Applicants: FC<ApplicantsProps> = ({ applicants }) => {
  // const [resumeUrl, setResumeUrl] = React.useState<string>("");

  // const resumeHandle = async (url: string) => {
  //   let resumeUrlGet;

  //   if (applicants.resume) {
  //     resumeUrlGet = await supabaseGetPublicUrl(applicants, "article");
  //   } else {
  //     resumeUrlGet = "/images/company2.png";
  //   }

  //   setResumeUrl(String(resumeUrlGet));
  // };

  // console.log(resumeUrl);

  return (
    <Table>
      <TableHeader>
        <TableRow>
          {JOB_APPLICANTS_COLUMNS.map((item: string, i: number) => (
            <TableHead key={i}>{item}</TableHead>
          ))}
          <TableHead>Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {applicants && (
          <>
            {applicants?.map((item: any, i: number) => (
              <TableRow key={item.id + 1}>
                <TableCell>{item.name}</TableCell>
                <TableCell>{item.previousJobTitle}</TableCell>
                <TableCell>{item.phone}</TableCell>
                <TableCell>{item.resume}</TableCell>

                <TableCell className='flex gap-2'>
                  <Button
                    size='icon'
                    variant='default'
                    className='rounded-full bg-green-700 p-2 hover:bg-green-800'
                    asChild
                  >
                    <MdDone className='h-8 w-8 font-bold' />
                  </Button>
                  <Button
                    size='icon'
                    variant='default'
                    asChild
                    className='rounded-full bg-red-700 p-2 hover:bg-red-800'
                  >
                    <MdClose className='h-8 w-8' />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </>
        )}
      </TableBody>
    </Table>
  );
};

export default Applicants;
