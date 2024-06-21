'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useQueryClient } from '@tanstack/react-query';
import { format } from 'date-fns';
import { CalendarIcon } from 'lucide-react';
import { useRouter } from 'next/navigation';
import React, { FC, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { cn } from '@/lib/utils';
import { useUpdateCompanyProfile } from '@/hooks/perusahaan/setting/hook';

import TitleForm from '@/components/atoms/title-form';
import CKEditor from '@/components/organisms/CKEditor';
import CustomUpload from '@/components/organisms/CustomUpload';
import FieldInput from '@/components/organisms/FieldInput';
import InputSkills from '@/components/organisms/InputSkills';
import ButtonLoading from '@/components/organisms/LoadingButton';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';
import { useToast } from '@/components/ui/use-toast';

import {
  EMPLOYEE_OPTIONS,
  LOCATION_OPTIONS,
  optionType,
} from '@/constant/perusahaan';
import { overviewFormSchema } from '@/validations/perusahaan/form-schema';

import { TCompanyProfileItem } from '@/types/perusahaan/setting';

interface CompanySettingProps {
  data: TCompanyProfileItem;
  isLoading: boolean;
}

const OverviewForm: FC<CompanySettingProps> = ({ data, isLoading }) => {
  console.log(data);

  const queryClient = useQueryClient();
  const { mutate, isPending } = useUpdateCompanyProfile();
  const { toast } = useToast();
  const router = useRouter();

  const [editorLoaded, setEditorLoaded] = useState<boolean>(false);
  const form = useForm<z.infer<typeof overviewFormSchema>>({
    resolver: zodResolver(overviewFormSchema),
    defaultValues: {
      name: data?.name,
      about: data?.about === null ? '' : data?.about,
      location: data?.location === null ? '' : data?.location,
      employeeTotal: data?.employeeTotal === null ? '' : data?.employeeTotal,
      industry: data?.industry === null ? '' : data?.industry,
      techStack: data?.techStack === null ? [] : data?.techStack,
      dateFounded: data?.dateFounded ? new Date(data.dateFounded) : undefined,
      link: data?.link === null ? '' : data?.link,
    },
  });

  const onSubmit = (values: z.infer<typeof overviewFormSchema>) => {
    const payload = {
      name: values.name,
      location: values.location,
      employeeTotal: values.employeeTotal,
      industry: values.industry,
      dateFounded: new Date(values.dateFounded).toISOString(),
      techStack: values.techStack,
      about: values.about,
      link: values.link,
    };

    mutate(payload, {
      onSuccess: () => {
        queryClient.invalidateQueries(['get-company-setting'] as any);
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

  useEffect(() => {
    setEditorLoaded(true);
  }, []);

  return (
    <div>
      <div className='my-5'>
        <TitleForm
          title='Basic Information'
          subtitle='This is company information that you can update anytime'
        />
      </div>

      <Separator className='mb-7' />

      <Form {...form}>
        <form className='space-y-7' onSubmit={form.handleSubmit(onSubmit)}>
          <FieldInput
            title='Company Logo'
            subtitle='This image will be shown publicly as company logo.'
          >
            <CustomUpload form={form} name='image' />
          </FieldInput>

          <FieldInput
            title='Company Details'
            subtitle='Introduce your company core info quickly to users by fill up company details'
          >
            <div className='space-y-5'>
              <FormField
                control={form.control}
                name='name'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Company Name</FormLabel>
                    <FormControl>
                      <Input
                        className='w-[450px]'
                        placeholder='Twitter'
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='link'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Website</FormLabel>
                    <FormControl>
                      <Input
                        className='w-[450px]'
                        placeholder='https://twitter.com'
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name='location'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Location</FormLabel>
                    <Select
                      value={field.value}
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger className='w-[450px]'>
                          <SelectValue placeholder='Location'>
                            {LOCATION_OPTIONS.find(
                              (option) => option.label === field.value
                            )?.label || 'Select Location'}
                          </SelectValue>
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {LOCATION_OPTIONS.map((item: optionType, i: number) => (
                          <SelectItem key={item.id + i} value={item.id}>
                            {item.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className='grid w-[450px] grid-cols-2 gap-4'>
                <FormField
                  control={form.control}
                  name='employeeTotal'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Employee</FormLabel>
                      <Select
                        value={field.value}
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder='Employee'>
                              {EMPLOYEE_OPTIONS.find(
                                (option) => option.label === field.value
                              )?.label || 'Select Employee'}
                            </SelectValue>
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {EMPLOYEE_OPTIONS.map(
                            (item: optionType, i: number) => (
                              <SelectItem key={item.id + i} value={item.id}>
                                {item.label}
                              </SelectItem>
                            )
                          )}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name='industry'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Industry</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder='Industry' />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {EMPLOYEE_OPTIONS.map(
                            (item: optionType, i: number) => (
                              <SelectItem key={item.id + i} value={item.id}>
                                {item.label}
                              </SelectItem>
                            )
                          )}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name='dateFounded'
                render={({ field }) => (
                  <FormItem className='flex flex-col'>
                    <FormLabel>Date Founded</FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant='outline'
                            className={cn(
                              'w-[450px] pl-3 text-left font-normal',
                              !field.value && 'text-muted-foreground'
                            )}
                          >
                            {field.value ? (
                              format(field.value, 'PPP')
                            ) : (
                              <span>Pick a date</span>
                            )}
                            <CalendarIcon className='ml-auto h-4 w-4 opacity-50' />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className='w-auto p-0' align='start'>
                        <Calendar
                          mode='single'
                          selected={field.value}
                          onSelect={field.onChange}
                          disabled={(date) =>
                            date > new Date() || date < new Date('1900-01-01')
                          }
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <InputSkills
                form={form}
                name='techStack'
                label='Add Tech Stack'
              />
            </div>
          </FieldInput>

          <FieldInput
            title='About Company'
            subtitle='Brief description for your company. URLs are hyperlinked.'
          >
            <CKEditor form={form} name='about' editorLoaded={editorLoaded} />
          </FieldInput>

          <div className='flex justify-end'>
            {isPending ? (
              <ButtonLoading size='lg' className='p-[22px]' />
            ) : (
              <Button size='lg' className='bg-primary-base hover:bg-hover-base'>
                Save Changes
              </Button>
            )}
          </div>
        </form>
      </Form>
    </div>
  );
};

export default OverviewForm;
