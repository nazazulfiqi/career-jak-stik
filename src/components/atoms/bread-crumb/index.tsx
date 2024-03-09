import Link from 'next/link';
import { FC, Fragment, ReactElement } from 'react';
import { CgFormatSlash } from 'react-icons/cg';

import { TBreadCrumbProps } from './types';

export const BreadCrumb: FC<TBreadCrumbProps> = ({
  items,
  textColor = 'text-primary-base',
  bgColor = 'bg-light',
}): ReactElement => {
  return (
    <div
      className={` w-full place-content-start  py-4 text-xs !font-extrabold md:text-sm ${bgColor} px-8 md:px-14 lg:px-16 2xl:px-0`}
      aria-label='Breadcrumb'
    >
      <div className='mx-auto grid max-w-[1440px]'>
        <ol className='flex w-full items-center gap-x-2'>
          {items.map((crumb, index) => {
            const isLastItem = index === items.length - 1;
            if (!isLastItem) {
              return (
                <Fragment key={index}>
                  <Link
                    href={crumb.link}
                    key={index}
                    className={`inline-flex  items-center font-[600] ${textColor}`}
                  >
                    {crumb.name}
                  </Link>
                  {/* <span className={`${textColor}`}>/</span> */}
                  <CgFormatSlash className={`${textColor} text-xl`} />
                </Fragment>
              );
            } else {
              return (
                <Link key={index} href={crumb.link}>
                  <span className='cursor-pointer font-[600] text-neutral-500'>
                    {crumb.name}
                  </span>
                </Link>
              );
            }
          })}
        </ol>
      </div>
    </div>
  );
};
