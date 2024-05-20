'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import Image from 'next/image';
import { FC, useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { useProfile } from '@/hooks/account/hook';
import { useApplyJob } from '@/hooks/jobs/hook';

import ButtonLoading from '@/components/organisms/LoadingButton';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';

import { applyJobSchema } from '@/validations/lowongan/apply-job';

interface FormModalApplyProps {
  image: string | undefined;
  roles: string | undefined;
  location: string | undefined;
  jobType: string | undefined;
  id: string;
}

const FormModalApply: FC<FormModalApplyProps> = ({
  image,
  jobType,
  location,
  roles,
  id,
}) => {
  const { data, isLoading } = useProfile();
  const [dialogOpen, setDialogOpen] = useState(false);

  console.log(data);

  const form = useForm<z.infer<typeof applyJobSchema>>({
    resolver: zodResolver(applyJobSchema),
    defaultValues: {
      name: data?.data?.name,
      email: data?.data?.email,
      phoneNumber: data?.data?.phoneNumber as string,
      previousJob: data?.data?.latestJob as string,
      linkedInUrl: data?.data?.linkedInUrl as string,
      portofolioUrl: data?.data?.portofolioUrl as string,
      additionalInform: data?.data?.addInformation as string,
    },
  });

  const { toast } = useToast();
  const { mutate, isPending } = useApplyJob(String(id));
  const [loading, setLoading] = useState(false);

  const onSubmit = async (val: z.infer<typeof applyJobSchema>) => {
    setLoading(true);

    const payload = {
      name: val.name,
      email: val.email,
      phoneNumber: val.phoneNumber,
      previousJob: val.previousJob,
      linkedInUrl: val.linkedInUrl,
      portofolioUrl: val.portofolioUrl,
      additionalInform: val.additionalInform,
    };

    mutate(payload, {
      onSettled: () => {
        setLoading(false);
        setDialogOpen(false);
      },
    });
  };

  return (
    <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
      <DialogTrigger asChild>
        <Button
          size='lg'
          className='px-12 py-6 text-lg'
          onClick={() => setDialogOpen(true)}
        >
          Apply
        </Button>
      </DialogTrigger>
      <DialogContent className='sm:max-w-[600px]'>
        <div>
          <div className='inline-flex items-center gap-4'>
            <div>
              <Image src={image!} alt={image!} width={60} height={60} />
            </div>
            <div>
              <div className='text-lg font-semibold'>{roles}</div>
              <div className='text-gray-500'>
                {location} . {jobType}
              </div>
            </div>
          </div>

          <Separator className='my-5' />

          <div className='mb-5'>
            <div className='text-lg font-semibold'>Submit your application</div>
            <div className='mt-2 text-sm text-gray-500'>
              The following is required and will only be shared with Nomad
            </div>
          </div>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-6'>
              <div className='grid grid-cols-2 gap-6'>
                <FormField
                  control={form.control}
                  name='name'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full name</FormLabel>
                      <FormControl>
                        <Input placeholder='Enter your fullname' {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name='email'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder='Enter your email' {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name='phoneNumber'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone number</FormLabel>
                      <FormControl>
                        <Input
                          placeholder='Enter your phone number'
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name='previousJob'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Current of previous job title</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="What's your current of previous job title"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <Separator />

              <h2 className='font-semibold'>LINKS</h2>

              <div className='grid grid-cols-2 gap-6'>
                <FormField
                  control={form.control}
                  name='linkedInUrl'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>LinkedIn URL</FormLabel>
                      <FormControl>
                        <Input
                          placeholder='Link to your linked URL'
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name='portofolioUrl'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Portfolio URL</FormLabel>
                      <FormControl>
                        <Input
                          placeholder='Link to your portfolio URL'
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name='additionalInform'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Additional Information</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder='Add a cover letter or anything else you want to share'
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* <UploadField form={form} /> */}

              {loading ? (
                <ButtonLoading className='w-full' />
              ) : (
                <Button
                  type='submit'
                  className='bg-primary-base hover:bg-hover-base w-full'
                >
                  Kirim
                </Button>
              )}
            </form>
          </Form>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default FormModalApply;
