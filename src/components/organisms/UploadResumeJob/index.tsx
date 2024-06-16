import React, { ChangeEvent, FC, useRef, useState } from 'react';
import { UseFormReturn } from 'react-hook-form';
import { z } from 'zod';

import { FormField, FormItem, FormMessage } from '@/components/ui/form';

import { applyJobSchema } from '@/validations/lowongan/apply-job';

interface UploadResumeJobProps {
  form: UseFormReturn<z.infer<typeof applyJobSchema>>;
  file?: any;
}

const UploadResumeJob: FC<UploadResumeJobProps> = ({ form, file }) => {
  console.log(file);

  const inputRef = useRef<HTMLInputElement>(null);
  const [nameFile, setNameFile] = useState<string>('Attach Resume / CV');

  const handleSelectFile = () => {
    inputRef.current?.click();
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setNameFile(e.target.files[0].name);
      form.setValue('resume', e.target.files[0]);
    }
  };

  return (
    <div className='disabled flex flex-row items-center justify-between'>
      <div className='font-semibold'>Attach your resume</div>
      <div>
        <div>
          <div
            onClick={handleSelectFile}
            className='text-primary-base border-primary-base cursor-pointer border-2 border-dashed p-3 text-center text-xs font-semibold'
          >
            {file === null && nameFile === '' ? 'Attach resume' : ''}
            {file !== null && nameFile !== '' ? file : ''}
          </div>
        </div>
        <FormField
          control={form.control}
          name='resume'
          render={({ field }) => (
            <FormItem>
              <FormMessage className='mt-2' />
            </FormItem>
          )}
        />
        <input
          ref={inputRef}
          type='file'
          className='hidden'
          accept='application/pdf'
          onChange={handleFileChange}
        />
      </div>
    </div>
  );
};

export default UploadResumeJob;
