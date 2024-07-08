import { useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { IoWarningOutline } from 'react-icons/io5';

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

interface modalTriggerProps {
  modalTrigger: React.ReactNode;
  jobId?: string;
}

export const ModalApprove = ({ modalTrigger, jobId }: modalTriggerProps) => {
  const queryClient = useQueryClient();

  const router = useRouter();

  const handleSubmitDelete = async () => {
    // await mutate(articleId, {
    //   onSuccess: () => {
    //     router.push('/sekilas-ilmu');
    //     queryClient.invalidateQueries(['article-get'] as any);
    //     toast.success('Artikel Berhasil Dihapus!');
    //   },
    // });
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
              onClick={handleSubmitDelete}
            >
              Terima
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
