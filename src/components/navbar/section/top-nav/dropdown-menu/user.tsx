import { FC, ReactElement } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { TNavbarUserProps } from './types';
import Avatar from 'react-avatar';
import Image from 'next/image';

export const NavbarUserMenu: FC<TNavbarUserProps> = ({
  items,
  userData,
}): ReactElement => {
  return (
    <Menu as='div' className='z-50 hidden h-9 w-9 lg:inline-block'>
      <Menu.Button>
        <div className='group  flex h-9 w-9  cursor-pointer items-center justify-center overflow-hidden rounded-md bg-neutral-100'>
          {userData?.avatar ? (
            <Image
              src={userData.avatar || '/profile-avatar-example.svg'}
              alt={'user avatar'}
              width={36}
              height={36}
              className='flex h-9 w-9  items-center justify-center bg-white bg-center font-[700]  text-neutral-600'
            />
          ) : (
            <Avatar
              name={userData?.full_name}
              color='#F26800'
              className=' h-[36px] w-[36px] rounded-md'
              size='36'
            />
          )}
        </div>
      </Menu.Button>

      <Transition
        enter='transition ease duration-500 transform'
        enterFrom='opacity-0 -translate-y-2'
        enterTo='opacity-100 translate-y-0'
        leaveFrom='opacity-100 translate-y-0'
        leaveTo='opacity-0 -translate-y-12'
      >
        <Menu.Items
          as='div'
          className='w-30 absolute right-0 top-2 origin-top-right  overflow-hidden rounded-md bg-neutral-100  shadow-lg'
        >
          <div className='flex w-[300px] items-center gap-3 border-b-2 border-neutral-200 px-4 py-4'>
            {userData?.avatar ? (
              <figure className='flex h-9 w-9 overflow-hidden bg-neutral-200 object-cover'>
                <Image
                  src={userData.avatar}
                  alt={'user avatar'}
                  width={36}
                  height={36}
                  className='flex w-full  items-center justify-center bg-white font-[700] text-neutral-600'
                />
              </figure>
            ) : (
              <Avatar
                name={userData?.full_name}
                color='#F26800'
                className=' h-[36px] w-[36px] rounded-md'
                size='36'
              />
            )}

            <section>
              <h1 className='dark:text-neubg-neutral-100 text-sm text-neutral-900'>
                {userData?.full_name}
              </h1>
              <p className='text-xs text-neutral-500 dark:text-neutral-300'>
                {userData?.email}
              </p>
            </section>
          </div>

          {items.map(({ icon, name, onClick }, index) => (
            <Menu.Item
              key={index}
              as='div'
              className={
                'flex cursor-pointer items-center gap-3 px-4 py-3 transition-all duration-300 ease-in-out hover:bg-neutral-200'
              }
              onClick={onClick}
            >
              {icon}
              <button type='button'>
                <h1 className='group:hover:text-neutral-100 text-center text-[12px] font-bold text-[#171717]'>
                  {name}
                </h1>
              </button>
            </Menu.Item>
          ))}
        </Menu.Items>
      </Transition>
    </Menu>
  );
};
