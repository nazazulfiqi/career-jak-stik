import { PartyPopper, X } from 'lucide-react';
import React, { FC, useState } from 'react';

import { FormField, FormItem, FormMessage } from '@/components/ui/form';

import DialogAddBenefits from './DialogBenefits';

interface InputBenefitsProps {
  form: any;
}

const InputBenefits: FC<InputBenefitsProps> = ({ form }) => {
  const [benefit, setBenefit] = useState<any[]>([]);

  const deleteBenefit = (item: any) => {
    const deletedBenefit = benefit?.filter((benefit: any) => benefit !== item);
    setBenefit([...(deletedBenefit || [])]);
    form.setValue('benefit', deletedBenefit);
  };

  const updateBenefit = (item: any) => {
    const newValue: any[] = [...benefit, item];

    setBenefit(newValue);
    form.setValue('benefit', newValue);
  };

  return (
    <div className='block'>
      <DialogAddBenefits updateBenefit={updateBenefit} />
      <div className='mt-5 grid grid-cols-3 gap-5'>
        {benefit?.map((item: any, i: number) => (
          <div
            className='relative w-[200px] rounded-sm border border-gray-200 p-3'
            key={i}
          >
            <PartyPopper className='text-primary mb-5 h-7 w-7' />
            <div className='absolute right-2 top-2 cursor-pointer'>
              <X className='h=6 w-6' onClick={() => deleteBenefit(item)} />
            </div>
            <div className='mb-3 text-xl font-semibold'>{item}</div>{' '}
            {/* Update here */}
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
