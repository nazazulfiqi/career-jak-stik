import React, { FC } from 'react';
import { CiFilter } from 'react-icons/ci';

import LoadingDots from '@/components/atoms/LoadingDots';
import Pagination from '@/components/atoms/pagination';
import FormFilterDynamic from '@/components/organisms/FormFilterDynamic';
import FormSearch from '@/components/organisms/FormSearch';
import { Button } from '@/components/ui/button';

import CompanyCard from '@/modules/company/components/CompanyCard';
import JobCard from '@/modules/jobs/components/JobCard';

import { filterFormType } from '@/types';
import { TGetAllJob } from '@/types/jobs';

interface ExploreDataContainerProps {
  formFilter: any;
  onSubmitFilter: (val: any) => Promise<void>;
  filterForms: filterFormType[];
  loading: boolean;
  title: string;
  subtitle: string;
  data: TGetAllJob[];
  type: 'job' | 'company';
}

const ExploreDataContainer: FC<ExploreDataContainerProps> = ({
  title,
  subtitle,
  formFilter,
  onSubmitFilter,
  filterForms,
  data,
  type,
  loading,
}) => {
  const [isFilterOpen, setIsFilterOpen] = React.useState(false);

  const toggleFilter = () => {
    setIsFilterOpen((prev) => !prev);
    console.log(isFilterOpen);
  };

  const handlePageChange = (page: number) => {
    console.log(page);
  };

  return (
    <>
      <div className='bg-slate-100'>
        <div className='mx-auto mb-12 w-full max-w-[1440px] px-8 pt-10 md:px-14 lg:px-16 2xl:px-0'>
          <div className='mb-10'>
            <div className='mx-auto  flex justify-center gap-2 text-center'>
              <span className='text-5xl font-bold'>Find Your</span>
              <div className='relative'>
                <span className='text-primary-base text-5xl font-bold'>
                  {title}
                </span>
                {/* <div className='absolute top-10 h-10 w-[220px]'>
                  <Image
                    src='/images/pattern2.png'
                    alt='/images/pattern2.png'
                    fill
                    objectFit='contain'
                  />
                </div> */}
              </div>
            </div>
            <div className='mt-2 text-center text-[#A3A3A3]'>{subtitle}</div>
          </div>
          <div className='mx-auto max-w-5xl'>
            <FormSearch />
          </div>
        </div>
      </div>
      <div className='mx-auto mb-16 mt-20 w-full max-w-[1440px] flex-row items-start gap-10 px-8  md:flex md:px-14 lg:px-16 2xl:px-0'>
        <div className='block md:hidden'>
          <Button size='icon' onClick={toggleFilter}>
            <CiFilter size={22} />
          </Button>

          <div className={`${isFilterOpen ? 'block' : 'hidden'} mt-4`}>
            <FormFilterDynamic
              formFilter={formFilter}
              onSubmitFilter={onSubmitFilter}
              filterForms={filterForms}
            />
          </div>
        </div>

        <div className='hidden w-1/5 md:block'>
          <FormFilterDynamic
            formFilter={formFilter}
            onSubmitFilter={onSubmitFilter}
            filterForms={filterForms}
          />
        </div>
        <div className='mt-6 w-full md:mt-0'>
          <div className='mb-8'>
            <div className='text-3xl font-semibold'>
              All {type === 'job' ? 'Jobs' : 'Companies'}
            </div>
            <div className='text-muted-foreground'>
              Showing {data.length} Result
            </div>
          </div>

          <div className=''>
            {loading ? (
              <LoadingDots />
            ) : (
              <>
                {type === 'job' ? (
                  <div className='grid grid-cols-1 gap-7'>
                    {data?.map((item: any, i: number) => (
                      <JobCard key={i} {...item} />
                    ))}
                  </div>
                ) : (
                  <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4'>
                    {data?.map((item: any, i: number) => (
                      <CompanyCard key={i} {...item} />
                    ))}
                  </div>
                )}
              </>
            )}
          </div>
          {!loading && (
            <Pagination
              currentPage={1}
              totalPages={12}
              onPageChange={handlePageChange}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default ExploreDataContainer;
