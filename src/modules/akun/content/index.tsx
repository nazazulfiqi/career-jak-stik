'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import React, { FC } from 'react';
import { useForm } from 'react-hook-form';
import { IoAlertCircleOutline } from 'react-icons/io5';
import { z } from 'zod';

import UploadField from '@/components/organisms/UploadField';
import UploadTranskrip from '@/components/organisms/UploadTranskrip';
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

import { formApplySchema } from '@/validations/form-schema';

const EditProfilContent: FC = () => {
  const form = useForm<z.infer<typeof formApplySchema>>({
    resolver: zodResolver(formApplySchema),
  });

  const onSubmit = (values: z.infer<typeof formApplySchema>) => {
    console.log(values);
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
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-6'>
            <div className='grid grid-cols-2 gap-6'>
              <FormField
                control={form.control}
                name='fullname'
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
                      <Input placeholder='Masukkan Alamat Email' {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='phone'
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
                name='previousJobTitle'
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
                      <Input placeholder='Masukkan Program Studi' {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name='ipk'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Ipk</FormLabel>
                    <FormControl>
                      <Input placeholder='Masukkan Ipk Cth. 3.5' {...field} />
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
                name='linkedIn'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>LinkedIn URL</FormLabel>
                    <FormControl>
                      <Input placeholder='Link to your linked URL' {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='portfolio'
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
              name='coverLetter'
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

            <UploadField form={form} />

            <UploadTranskrip form={form} />

            <Button
              type='submit'
              className='bg-primary-base hover:bg-hover-base w-full'
            >
              Apply
            </Button>
          </form>
        </Form>
      </div>
    </section>
  );
};

export default EditProfilContent;
