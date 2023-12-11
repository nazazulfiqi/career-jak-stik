import { Listbox, Transition } from '@headlessui/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FC, Fragment, ReactElement } from 'react';
import { MdOutlineNavigateNext } from 'react-icons/md';

import { TBottomNavProps } from '../../bot-nav/types';

export const NavMenuDropDown: FC<TBottomNavProps> = ({
  bottomNavItems,
  bottomNavItemStyle,
}): ReactElement => {
  const pathname = usePathname();

  const currentPage = bottomNavItems.filter((item) => {
    return pathname.includes(item.link);
  });

  return (
    <Listbox as='div' className='lg:hidden'>
      <div className='relative mt-1'>
        <Listbox.Button className='relative flex w-auto items-center justify-between  gap-2 py-2  pl-2  text-left text-sm'>
          <span className='block font-bold text-neutral-600'>
            {currentPage.map((item) => {
              return item.name;
            })}
          </span>
          <MdOutlineNavigateNext className='rotate-90 text-xl text-neutral-600 ' />
        </Listbox.Button>
        <Transition
          as={Fragment}
          leave='transition ease-in duration-100'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <Listbox.Options className='absolute mt-1  w-44 rounded-md bg-white  py-2 text-sm shadow-md '>
            {bottomNavItems.map((item, index) => (
              <Listbox.Option key={index} value={item.name}>
                <Link href={item.link}>
                  <span
                    className={`mx-2 block px-3  py-3 text-neutral-600 ${
                      pathname === item.link
                        ? bottomNavItemStyle
                        : 'hover:text-version3-500'
                    }`}
                  >
                    {item.name}
                  </span>
                </Link>
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Transition>
      </div>
    </Listbox>
  );
};
