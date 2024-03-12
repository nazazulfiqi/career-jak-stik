'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import React, { FC } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

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

import { changePasswordSchema } from '@/validations/akun/ubah-sandi';

const UbahKataSandiContent: FC = () => {
  const form = useForm<z.infer<typeof changePasswordSchema>>({
    resolver: zodResolver(changePasswordSchema),
  });

  const onSubmit = (values: z.infer<typeof changePasswordSchema>) => {
    console.log(values);
  };

  return (
    <section>
      <div className='mb-4 space-y-4'>
        <h1 className='text-xl font-semibold'>Ubah Kata Sandi</h1>
        <Separator />
      </div>

      <div className='mt-4'>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-6'>
            <div className='grid grid-cols-1 gap-6'>
              <FormField
                control={form.control}
                name='currentPassword'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Kata Sandi Lama</FormLabel>
                    <FormControl>
                      <Input
                        placeholder='Masukkan kata sandi lama'
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='newPassword'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Kata Sandi Baru</FormLabel>
                    <FormControl>
                      <Input
                        placeholder='Masukkan kata sandi baru'
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='confirmPassword'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Konfirmasi Kata Sandi</FormLabel>
                    <FormControl>
                      <Input
                        placeholder='Masukkan konfirmasi kata sandi baru'
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
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

export default UbahKataSandiContent;
