import React, { ChangeEvent, FC, useRef, useState } from 'react';
import { UseFormReturn } from 'react-hook-form';
import { z } from 'zod';

import { FormField, FormItem, FormMessage } from '@/components/ui/form';

import { formApplySchema } from '@/validations/form-schema';

interface UploadTranskripProps {
  form: UseFormReturn<z.infer<typeof formApplySchema>>;
}

const UploadTranskrip: FC<UploadTranskripProps> = ({ form }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [nameFile, SetNameFile] = useState<string>('Attach Transkrip Nilai');

  const handleSelectFile = () => {
    inputRef.current?.click();
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      SetNameFile(e.target.files[0].name);
      form.setValue('transkrip', e.target.files[0]);
    }
  };

  return (
    <div className='flex flex-row items-center justify-between'>
      <div className='font-semibold'>Attach your transkrip nilai</div>
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
          name='transkrip'
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

export default UploadTranskrip;
