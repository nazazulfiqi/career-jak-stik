'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useSession } from 'next-auth/react';
import { FC, ReactElement } from 'react';
import Avatar from 'react-avatar';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { useRecoilState } from 'recoil';

import { MobileNavbarState } from './store';
import { TMobileMenuProps } from './types';

export const HamburgerIcon: FC = (): ReactElement => {
  const [getMobileNavbar, setMobileNavbar] = useRecoilState(MobileNavbarState);

  return (
    <div className='lg:hidden'>
      <button
        name='mobile-menu'
        id='mobile-menu'
        aria-label='mobile-menu'
        className='group flex h-9  w-9 flex-col  items-center justify-center rounded-md bg-neutral-100 p-2 lg:hidden'
        onClick={() => setMobileNavbar(!getMobileNavbar)}
      >
        <AiOutlineMenu className='text-xl ' />
      </button>
    </div>
  );
};

export const NavbarMobileMenu: FC<TMobileMenuProps> = ({
  items,
  mobileitems,
  userData,
  button,
  logo,
}): ReactElement => {
  const [getMobileNavbar, setMobileNavbar] = useRecoilState(MobileNavbarState);

  const { data: session } = useSession();

  return (
    <div
      className={`${
        getMobileNavbar ? 'top-0' : '-top-[100vh]'
      } absolute left-0 right-0 border-b-2 border-neutral-300 bg-white px-4 py-4 shadow-md transition-all duration-300 ease-in-out lg:hidden`}
    >
      <section className='mb-4 flex w-full justify-between py-1.5 pl-1 pr-4'>
        <Image
          src={logo as string}
          alt='platform-logo'
          loading='eager'
          width={40}
          height={45}
          className='h-6 w-auto md:h-8 lg:h-9'
          quality={75}
          priority
        />
        <AiOutlineClose
          className='text-neutral-base cursor-pointer text-xl font-bold'
          onClick={() => setMobileNavbar(!getMobileNavbar)}
        />
      </section>
      {session ? (
        <section className='mb-4 flex w-full items-center  gap-3 border-b-[1px] border-neutral-200 px-1 pb-4'>
          {userData?.avatar ? (
            <Image
              src={userData.avatar || '/profile-avatar-example.svg'}
              alt='user avatar'
              width={36}
              height={36}
              className='flex  h-9 w-9 items-center justify-center rounded-md bg-white bg-center object-cover font-[700] text-neutral-600'
            />
          ) : (
            <Avatar
              name={userData?.full_name}
              color='#F26800'
              className=' h-[36px] w-[36px] rounded-md'
              size='36'
            />
          )}

          <section>
            <h1 className='text-sm text-neutral-900 '>{userData?.full_name}</h1>
            <p className='text-xs text-neutral-500 '>{userData?.email}</p>
          </section>
        </section>
      ) : null}
      <section className='flex flex-col gap-y-4 border-b-[1px] border-neutral-200 pb-4'>
        {mobileitems.map((item, index) => {
          return (
            <Link
              href={item.href}
              key={index}
              className='flex items-center gap-2'
            >
              {item.icon}
              <h1 className='text-sm font-bold text-neutral-700'>
                {item.name}
              </h1>
            </Link>
          );
        })}
      </section>
      {session ? (
        <section className=' px-1 py-2'>
          {items.map(({ icon, name, onClick }, index) => (
            <div key={index} className='flex items-center gap-3  py-3 '>
              {icon}
              <button type='submit' onClick={onClick}>
                <h1 className='group:hover:text-neutral-100  text-center text-sm text-[#171717]'>
                  {name}
                </h1>
              </button>
            </div>
          ))}
        </section>
      ) : (
        <section className='flex gap-2 px-1 py-4'>{button}</section>
      )}
    </div>
  );
};
