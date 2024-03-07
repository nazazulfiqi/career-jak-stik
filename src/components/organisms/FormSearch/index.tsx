import React, { FC } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';

import { ComboboxDemo } from '@/components/atoms/combobox';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const FormSearch: FC = () => {
  return (
    <>
      <div className='mx-auto mt-4 flex flex-wrap gap-4 rounded-md bg-white p-4 shadow-md md:w-full md:flex-nowrap'>
        <div className='relative w-full md:w-2/3'>
          <Input
            type='text'
            placeholder='Job title or keyword'
            className='pl-10'
          />
          <div className='pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3'>
            <AiOutlineSearch className='text-gray-400' size={20} />
          </div>
        </div>
        <div className='w-full md:w-2/3'>
          <ComboboxDemo />
        </div>
        <Button
          // href='/auth/register'
          type='button'
          className='bg-primary-base border-primary-base hover:text-primary mx-auto h-auto w-auto rounded-md border-2 px-12 py-2 text-white hover:bg-white'
        >
          Search my job
        </Button>
      </div>

      <div>
        <div className='mt-4 text-white'>
          Popular : UI Designer, UX Researcher, Android, Admin
        </div>
      </div>
    </>
  );
};

export default FormSearch;
