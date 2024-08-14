import { useQueryClient } from '@tanstack/react-query';
import { IoWarningOutline } from 'react-icons/io5';

import { useStatusAccept } from '@/hooks/perusahaan/jobs/hook';

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
import { useToast } from '@/components/ui/use-toast';

interface modalTriggerProps {
  modalTrigger: React.ReactNode;
  applicant_id: string;
}

export const ModalApprove = ({
  modalTrigger,
  applicant_id,
}: modalTriggerProps) => {
  const queryClient = useQueryClient();

  const { toast } = useToast();

  const { mutate: mutateStatusAccept } = useStatusAccept();

  const handleStatusAccept = async () => {
    console.log(applicant_id);
    await mutateStatusAccept(applicant_id, {
      onSuccess: () => {
        queryClient.invalidateQueries(['article-get'] as any);
        toast({
          title: 'Sukses',
          description: 'Pelamar berhasil di terima',
        });
      },
      onError: () => {
        toast({
          title: 'Error',
          description: 'Resume Pelamar Harus dilihat Terlebih Dahulu',
        });
      },
    });
  };

  return (
    <Dialog>
      <DialogTrigger asChild>{modalTrigger}</DialogTrigger>
      <DialogContent className='p-12 text-center sm:max-w-[425px]'>
        <DialogHeader>
          <div className='flex items-center justify-center'>
            <div className='rounded-full bg-red-200 p-3'>
              <IoWarningOutline className='text-red-800' size={24} />
            </div>
          </div>
          <DialogTitle>
            <h6 className='text-center'>
              Apakah Anda yakin akan menerima applicant ini ?
            </h6>
          </DialogTitle>

          <DialogDescription className='text-center'>
            Cek kembali informasi applicant dengan benar.{' '}
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className='flex w-full justify-between'>
          <DialogClose asChild>
            <Button variant='outline' className='w-full'>
              Tinjau Ulang
            </Button>
          </DialogClose>
          <DialogClose className='w-full'>
            <Button
              type='submit'
              className='w-full bg-green-700 hover:bg-green-800'
              onClick={handleStatusAccept}
            >
              Terima
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
