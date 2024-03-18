import { PlusIcon } from 'lucide-react';
import React, { FC, useRef } from 'react';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

interface DialogAddBenefitsProps {
  updateBenefits: (item: any) => void;
}

const DialogAddBenefits: FC<DialogAddBenefitsProps> = ({ updateBenefits }) => {
  const benefitRef = useRef<HTMLInputElement>(null);
  const descriptionRef = useRef<HTMLTextAreaElement>(null);

  const handleSaveBenefit = () => {
    const benefit = benefitRef.current?.value;
    const description = descriptionRef.current?.value;

    if (benefit === '' || description === '') {
      return;
    }
    updateBenefits({
      benefit: benefit,
      description: description,
    });
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
          <DialogDescription>
            Make a new benefit, clicks save when your done
          </DialogDescription>
        </DialogHeader>
        <div className='mb-5 space-y-8'>
          <div>
            <Label htmlFor='benefit'>Benefit</Label>
            <Input
              id='benefit'
              ref={benefitRef}
              placeholder='fill your benefits...'
            />
          </div>
          <div>
            <Label htmlFor='benefit'>Description</Label>
            <Textarea
              id='description'
              ref={descriptionRef}
              placeholder='fill your description...'
            />
          </div>
        </div>
        <DialogFooter className='sm:justify-start'>
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
