import { PartyPopper, X } from 'lucide-react';
import React, { FC, useState } from 'react';

import { FormField, FormItem, FormMessage } from '@/components/ui/form';

import DialogAddBenefits from './DialogBenefits';

interface InputBenefitsProps {
  form: any;
}

const InputBenefits: FC<InputBenefitsProps> = ({ form }) => {
  const [benefits, setBenefits] = useState<any[]>([]);

  const deleteBenefit = (item: any) => {
    const deletedBenefits = benefits?.filter(
      (benefit: any) => benefit !== item
    );
    setBenefits([...(deletedBenefits || [])]);
    form.setValue('benefits', deletedBenefits);
  };

  const updateBenefits = (item: any) => {
    const newValue: any[] = [...benefits, item];

    setBenefits(newValue);
    form.setValue('benefits', newValue);
  };

  return (
    <div className='block'>
      <DialogAddBenefits updateBenefits={updateBenefits} />
      <div className='mt-5 grid grid-cols-3 gap-5'>
        {benefits?.map((item: any, i: number) => (
          <div
            className='relative w-[200px] rounded-sm border border-gray-200 p-3'
            key={i}
          >
            <PartyPopper className='text-primary mb-5 h-7 w-7' />
            <div className='absolute right-2 top-2 cursor-pointer'>
              <X className='h=6 w-6' onClick={() => deleteBenefit(item)} />
            </div>
            <div className='mb-3 text-xl font-semibold'>{item.benefit}</div>
            <div className='text-sm text-gray-500'>{item.description}</div>
          </div>
        ))}
      </div>

      <FormField
        control={form.control}
        name='benefits'
        render={({ field }) => (
          <FormItem>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
};

export default InputBenefits;
