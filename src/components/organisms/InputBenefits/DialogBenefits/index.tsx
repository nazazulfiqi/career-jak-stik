import { PlusIcon } from 'lucide-react';
import React, { FC, useRef } from 'react';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

interface DialogAddBenefitsProps {
  updateBenefit: (item: any) => void;
}

const DialogAddBenefits: FC<DialogAddBenefitsProps> = ({ updateBenefit }) => {
  const benefitRef = useRef<HTMLInputElement>(null);

  const handleSaveBenefit = () => {
    const benefit = benefitRef.current?.value;

    if (benefit === '') {
      return;
    }
    updateBenefit(benefit);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant='outline' type='button'>
          <PlusIcon className='mr-2 h-4 w-4' />
          Add Benefit
        </Button>
      </DialogTrigger>
      <DialogContent className='sm:max-w-md'>
        <DialogHeader>
          <DialogTitle>Add Benefit</DialogTitle>
        </DialogHeader>
        <div className='mb-5'>
          <Label htmlFor='benefit'>Benefit</Label>
          <Input
            id='benefit'
            ref={benefitRef}
            placeholder='fill your benefits...'
          />
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button type='button' onClick={handleSaveBenefit}>
              Save
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default DialogAddBenefits;
