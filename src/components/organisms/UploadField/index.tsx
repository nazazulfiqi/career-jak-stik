import React, { ChangeEvent, FC, useRef, useState } from 'react';
import { UseFormReturn } from 'react-hook-form';
import { z } from 'zod';

import { FormField, FormItem, FormMessage } from '@/components/ui/form';

import { formApplySchema } from '@/validations/form-schema';

interface UploadFieldProps {
  form: UseFormReturn<z.infer<typeof formApplySchema>>;
}

const UploadField: FC<UploadFieldProps> = ({ form }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [nameFile, SetNameFile] = useState<string>('Attach Resume / CV');

  const handleSelectFile = () => {
    inputRef.current?.click();
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      SetNameFile(e.target.files[0].name);
      form.setValue('resume', e.target.files[0]);
    }
  };

  return (
    <div className='flex flex-row items-center justify-between'>
      <div className='font-semibold'>Attach your resume</div>
      <div>
        <div>
          <div
            onClick={handleSelectFile}
            className='text-primary border-primary cursor-pointer border-2 border-dashed p-3 text-center text-xs font-semibold'
          >
            {nameFile}
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

export default UploadField;
