'use client';

import { FC, Fragment, ReactElement, Suspense } from 'react';
import { TNavbarProps } from './types';
import { lazily } from 'react-lazily';
import { LBottomNav, LTopNav } from './section';
import { useSession } from 'next-auth/react';
import { useRouter, usePathname } from 'next/navigation';

const { BottomNav, TopNav } = lazily(() => import('./section'));

export const Navbar: FC<TNavbarProps> = (props): ReactElement => {
  const { data: session } = useSession();
  const pathname = usePathname();

  const includesPath = props?.bottomNavRules?.some((path) =>
    pathname.includes(path)
  );

  return (
    <Fragment>
      <header className='sticky  top-0   z-50 w-full bg-white px-6 py-[14px] md:px-14 md:py-[16px] lg:px-16 lg:py-[18px] '>
        <div className='mx-auto flex max-w-[1440px] flex-col  justify-between transition-all duration-300 ease-in-out'>
          <Suspense fallback={<LTopNav />}>
            <TopNav {...props} />
          </Suspense>
        </div>
      </header>
      {session && includesPath && (
        <Suspense fallback={<LBottomNav />}>
          <BottomNav {...props} />
        </Suspense>
      )}
    </Fragment>
  );
};
