'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useQueryClient } from '@tanstack/react-query';
import React, { FC } from 'react';
import { useForm } from 'react-hook-form';
import { IoAlertCircleOutline } from 'react-icons/io5';
import { z } from 'zod';

import { useUpdateUserProfile } from '@/hooks/account/hook';

import LoadingDots from '@/components/atoms/LoadingDots';
import UploadField from '@/components/organisms/UploadField';
import Uploadtranscript from '@/components/organisms/UploadTranskrip';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
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

import { formApplySchema } from '@/validations/form-schema';

import { TUserDetailResponse } from '@/types/account';

interface EditProfilContentProps {
  data: TUserDetailResponse;
  isLoading: boolean; // menambahkan prop isLoading dengan tipe boolean
}

const EditProfilContent: FC<EditProfilContentProps> = ({ data, isLoading }) => {
  console.log(data);

  const queryClient = useQueryClient();
  const { toast } = useToast();
  const { mutate, isPending } = useUpdateUserProfile();

  const form = useForm<z.infer<typeof formApplySchema>>({
    resolver: zodResolver(formApplySchema),
    defaultValues: {
      name: data?.data?.name,
      email: data?.data?.email,
      phoneNumber: data?.data?.phoneNumber || '',
      latestJob: data?.data?.latestJob || '',
      major: data?.data?.major || '',
      gpa: data?.data?.gpa?.toString() || '',
      linkedInUrl: data?.data?.linkedInUrl || '',
      portofolioUrl: data?.data?.portofolioUrl || '',
      addInformation: data?.data?.addInformation || '',
      resume: undefined,
      transcript: undefined,
      address: data?.data?.address || '',
    },
  });

  const onSubmit = (values: z.infer<typeof formApplySchema>) => {
    const formData = new FormData();
    formData.append('name', values.name);
    formData.append('phoneNumber', values.phoneNumber);
    formData.append('latestJob', values.latestJob);
    formData.append('major', values.major);
    formData.append('gpa', values.gpa);
    formData.append('linkedInUrl', values.linkedInUrl);
    formData.append('portofolioUrl', values.portofolioUrl);
    formData.append('addInformation', values.addInformation);
    formData.append('address', values.address);

    if (values.resume) {
      formData.append('resume', values.resume);
    }
    if (values.transcript) {
      formData.append('transcript', values.transcript);
    }

    mutate(formData, {
      onSuccess: () => {
        queryClient.invalidateQueries(['get-user-me'] as any);
        toast({
          title: 'Berhasil',
          description: 'Akun berhasil diperbarui',
        });
      },
      onError: (e) => {
        console.log(e);
      },
    });
  };

  return (
    <section>
      <div className='mb-4 space-y-4'>
        <h1 className='text-xl font-semibold'>Lihat/Edit Profil</h1>
        <Separator />
      </div>
      <Alert className='bg-[#EFF0F0]'>
        <IoAlertCircleOutline className='h-5 w-5' />
        <AlertTitle>Perhatian!</AlertTitle>
        <AlertDescription>
          Silahkan lengkapi data diri dengan jujur.
        </AlertDescription>
      </Alert>

      <div className='mt-4'>
        {isLoading ? (
          <LoadingDots />
        ) : (
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-6'>
              <div className='grid grid-cols-2 gap-6'>
                <FormField
                  control={form.control}
                  name='name'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nama Lengkap</FormLabel>
                      <FormControl>
                        <Input placeholder='Masukkan Nama Lengkap' {...field} />
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
                      <FormLabel>Alamat Email</FormLabel>
                      <FormControl>
                        <Input
                          placeholder='Masukkan Alamat Email'
                          {...field}
                          disabled
                        />
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
                      <FormLabel>No. Telp</FormLabel>
                      <FormControl>
                        <Input placeholder='Masukkan No. Telp' {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name='address'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Alamat Lengkap</FormLabel>
                      <FormControl>
                        <Input
                          placeholder='Masukkan Alamat Lengkap'
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name='latestJob'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Pekerjaan Sebelumnya</FormLabel>
                      <FormControl>
                        <Input
                          placeholder='Masukkan Pekerjaan Sebelumnya'
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name='major'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Program Studi</FormLabel>
                      <FormControl>
                        <Input
                          placeholder='Masukkan Program Studi'
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name='gpa'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Ipk</FormLabel>
                      <FormControl>
                        <Input
                          placeholder='Masukkan Ipk Cth. 3.5'
                          {...field}
                          type='number'
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
                name='addInformation'
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

              <UploadField form={form} file={data.data.resume} />

              <Uploadtranscript form={form} file={data.data.transcript} />

              <Button
                type='submit'
                className='bg-primary-base hover:bg-hover-base w-full'
              >
                Simpan
              </Button>
            </form>
          </Form>
        )}
      </div>
    </section>
  );
};

export default EditProfilContent;
