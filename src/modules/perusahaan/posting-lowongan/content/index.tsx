'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { ArrowLeftIcon, Loader2 } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import React, { FC, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { useCreateJob, useGetJobCategory } from '@/hooks/perusahaan/jobs/hook';

import TitleForm from '@/components/atoms/title-form';
import CKEditor from '@/components/organisms/CKEditor';
import FieldInput from '@/components/organisms/FieldInput';
import InputBenefits from '@/components/organisms/InputBenefits';
import InputSkills from '@/components/organisms/InputSkills';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';
import { useToast } from '@/components/ui/use-toast';

import { JOBTYPES } from '@/constant/perusahaan';
import { jobFormSchema } from '@/validations/perusahaan/form-schema';

import { TCreateJobPayload } from '@/types/jobs';

const PostingLowonganContent: FC = () => {
  const [isLoadComponent, setIsLoadComponent] = useState<boolean>(false);

  const { data: session } = useSession();
  const router = useRouter();
  const { toast } = useToast();

  const [editorLoaded, setEditorLoaded] = useState<boolean>(false);
  const form = useForm<z.infer<typeof jobFormSchema>>({
    resolver: zodResolver(jobFormSchema),
    // defaultValues: {
    //   requiredSkills: [],
    // },
  });

  const { data, isLoading } = useGetJobCategory();

  const { mutate } = useCreateJob();

  const onSubmit = async (val: z.infer<typeof jobFormSchema>) => {
    console.log(val);

    try {
      const payload: TCreateJobPayload = {
        title: val.title,
        category: val.category,
        jobType: val.jobType,
        salaryFrom: val.salaryFrom,
        salaryTo: val.salaryTo,
        skills: val.skills,
        description: val.description,
        responsibility: val.responsibility,
        benefit: val.benefit,
      };

      await mutate(payload, {
        onSuccess: () => {
          toast({
            title: 'Job Posted',
            description: 'Your job has been successfully posted.',
          });
          router.push('/perusahaan/dashboard');
        },
        onError: (error) => {
          console.error('Error submitting form:', error);

          toast({
            title: 'Error',
            description:
              'An error occurred while posting the job. Please try again later.',
          });
        },
      });
    } catch (error) {
      console.error('Unexpected error submitting form:', error);
    }
  };

  useEffect(() => {
    setEditorLoaded(true);
  }, []);

  return (
    <div>
      <Link
        className='hover:text-primary inline-flex cursor-pointer items-center gap-2'
        href='/perusahaan/dashboard'
      >
        <ArrowLeftIcon className='h-7 w-7' />
        <span className='text-2xl font-semibold'>Post a Job</span>
      </Link>
      <div className='my-5'>
        <TitleForm
          title='Basic Information'
          subtitle='This is company information that you can update anytime'
        />
      </div>

      <Separator />

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className='mt-5 space-y-6 pt-6'
        >
          <FieldInput
            title='Job Title'
            subtitle='Job title must be describe one position'
          >
            <FormField
              control={form.control}
              name='title'
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      className='w-[450px]'
                      placeholder='e.g. Software Engineer'
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>At least 3 characters</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </FieldInput>

          <FieldInput
            title='Type of Employment'
            subtitle='You can select multiple type of employment'
          >
            <FormField
              control={form.control}
              name='jobType'
              render={({ field }) => (
                <FormItem className='space-y-3'>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className='flex flex-col space-y-1'
                    >
                      {JOBTYPES.map((item: string, i: number) => (
                        <FormItem
                          key={item + i}
                          className='flex items-center space-x-3 space-y-0'
                        >
                          <FormControl>
                            <RadioGroupItem value={item} />
                          </FormControl>
                          <FormLabel className='font-normal'>{item}</FormLabel>
                        </FormItem>
                      ))}
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </FieldInput>

          <FieldInput
            title='Salary'
            subtitle='Please specify the estimated salary range for the role.'
          >
            <div className='flex w-[450px] flex-row items-center justify-between'>
              <FormField
                control={form.control}
                name='salaryFrom'
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input className='w-full' placeholder='$100' {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <span className='text-center'>To</span>
              <FormField
                control={form.control}
                name='salaryTo'
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        className='w-full'
                        placeholder='$1000'
                        {...field}
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </FieldInput>

          <FieldInput
            title='Categories'
            subtitle='You can select job categories'
          >
            <FormField
              control={form.control}
              name='category'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Select Job Categories</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger className='w-[450px]'>
                        <SelectValue placeholder='Select Job Categories' />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {isLoading ? (
                        <SelectItem value='#' disabled>
                          <Loader2 className='h-4 w-4 animate-spin' />
                        </SelectItem>
                      ) : (
                        data?.data?.map((item: any, i: number) => (
                          <SelectItem value={item.name} key={i}>
                            {item.name}
                          </SelectItem>
                        ))
                      )}
                    </SelectContent>
                  </Select>

                  <FormMessage />
                </FormItem>
              )}
            />
          </FieldInput>

          <FieldInput
            title='Required Skills'
            subtitle='Add required skill for the job.'
          >
            <InputSkills form={form} label='Add Skills' name='skills' />
          </FieldInput>

          <FieldInput
            title='Job Description'
            subtitle='Job title must be describe one position'
          >
            <CKEditor
              form={form}
              name='description'
              editorLoaded={editorLoaded}
            />
          </FieldInput>

          <FieldInput
            title='Responsibilities'
            subtitle='Outline the core responsibilities of the position.'
          >
            <CKEditor
              form={form}
              name='responsibility'
              editorLoaded={editorLoaded}
            />
          </FieldInput>

          <FieldInput
            title='Perks and Benefits'
            subtitle='Encourage more people to apply by sharing the attractive rewards and benefits you offer your employees.'
          >
            <InputBenefits form={form} />
          </FieldInput>

          <div className='flex justify-end'>
            <Button size='lg' className='bg-primary-base hover:bg-hover-base'>
              Do a Review
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default PostingLowonganContent;
