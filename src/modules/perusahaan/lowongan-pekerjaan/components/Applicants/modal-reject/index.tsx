import { useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { IoWarningOutline } from 'react-icons/io5';

import { useStatusReject } from '@/hooks/perusahaan/jobs/hook';

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

export const ModalReject = ({
  modalTrigger,
  applicant_id,
}: modalTriggerProps) => {
  const queryClient = useQueryClient();

  const router = useRouter();
  const { toast } = useToast();

  const { mutate: mutateStatusReject } = useStatusReject();

  const handleStatusReject = async () => {
    await mutateStatusReject(applicant_id, {
      onSuccess: () => {
        queryClient.invalidateQueries(['article-get'] as any);
        toast({
          title: 'Sukses',
          description: 'Berhasil menolak pelamar',
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
              Apakah Anda yakin akan menolak applicant ini ?
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
              className='w-full bg-red-800 hover:bg-red-900'
              onClick={handleStatusReject}
            >
              Tolak
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
