'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { FC, ReactElement } from 'react';

import { Badge } from '@/components/ui/badge';

// import { SearchInput } from '@kampus-gratis/components/atoms';
import {
  HamburgerIcon,
  NavbarMobileMenu,
  NavbarUserMenu,
  NavMenuDropDown,
} from './dropdown-menu';
import { TNavbarProps } from '../../types';

export const TopNav: FC<TNavbarProps> = ({
  logo,
  logoStyle,
  button,
  userData,
  withSearch,
  topNavLinks,
  mobileMenuItems,
  ...props
}): ReactElement => {
  const router = useRouter();
  const pathname = usePathname();
  const { data: session } = useSession();

  // const [getSearchingKeyword, setSearchingKeyword] =
  //   useRecoilState(navSearchKeyword);

  return (
    <header className='flex w-full justify-between bg-white'>
      <div className='flex items-center gap-2 md:gap-4'>
        <Link className='flex' href='/'>
          <div className='inline-flex items-center gap-2'>
            <Image
              src='/images/stmik.png'
              alt='/images/stmik.png'
              width={60}
              height={60}
            />
            <span className='w-full text-2xl font-bold italic'>
              Layanan Karir.
            </span>
          </div>
          <Badge
            variant='outline'
            className='ml-1 h-6 bg-black px-2 text-white'
          >
            Beta
          </Badge>
        </Link>
        <div className='pl-8'>
          <ul className='hidden gap-x-6 font-[500] text-[#545559] lg:flex'>
            <li>
              <Link href='#'>Find Jobs</Link>
            </li>
            <li>
              <Link href='#'>Browse Companies</Link>
            </li>
          </ul>
        </div>
        {session && props?.bottomNavRules?.includes(pathname) && (
          <NavMenuDropDown
            bottomNavItems={props.bottomNavItems}
            bottomNavItemStyle={props.bottomNavItemStyle}
          />
        )}
      </div>

      <div className='flex items-center gap-2 md:gap-3 lg:gap-4 '>
        {topNavLinks?.length !== 0 ? (
          <div className='mr-2 hidden w-full gap-4  lg:flex'>
            {topNavLinks?.map((item: any) => {
              return (
                <Link href={item.href} key={item.href}>
                  <p className='hover:text-version3-500 cursor-pointer  text-sm text-neutral-900 duration-300 ease-in-out hover:underline hover:underline-offset-4'>
                    {item.name}
                  </p>
                </Link>
              );
            })}
          </div>
        ) : null}
        {/* {withSearch ? (
          <SearchInput
            value={getSearchingKeyword}
            onChange={(e) => {
              setSearchingKeyword(e.target.value);
            }}
          />
        ) : null} */}
        {/* <NavbarFeatureMenu features={props.features} /> */}
        {session ? (
          <>
            {/* <NavbarNotification /> */}
            <NavbarUserMenu
              userData={{
                full_name: userData?.full_name,
                email: userData?.email,
                avatar: userData?.avatar,
              }}
              {...props}
            />
          </>
        ) : (
          <section className='hidden lg:inline-block'>{button}</section>
        )}

        <HamburgerIcon />
      </div>
      <NavbarMobileMenu
        mobileitems={mobileMenuItems}
        userData={{
          full_name: userData?.full_name,
          email: userData?.email,
          avatar: userData?.avatar,
        }}
        button={button}
        logo={logo}
        {...props}
      />
    </header>
  );
};
