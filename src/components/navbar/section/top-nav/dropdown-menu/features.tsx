import { Menu, Transition } from '@headlessui/react';
import { FC, ReactElement } from 'react';
import { TbCategory2 } from 'react-icons/tb';
import Link from 'next/link';
import { TNavbarFeaturesProps } from './types';

export const NavbarFeatureMenu: FC<TNavbarFeaturesProps> = ({
  features,
}): ReactElement => {
  return (
    <Menu
      as='div'
      className={'relative left-0 z-50 hidden text-left lg:inline-block'}
    >
      <Menu.Button
        as='button'
        aria-label='feature-menu'
        name='feature-menu'
        id='feature-menu'
      >
        <div className='flex h-9 w-9 items-center justify-center rounded-md bg-neutral-100 shadow-sm'>
          <TbCategory2 className='hover:text-version3-500 text-[20px] text-neutral-600 transition-colors duration-300 ease-in-out' />
        </div>
      </Menu.Button>

      <Transition
        enter='transition ease duration-500 transform'
        enterFrom='opacity-0 -translate-y-2'
        enterTo='opacity-100 translate-y-0'
        leaveFrom='opacity-100 translate-y-0'
        leaveTo='opacity-0 -translate-y-12'
      >
        <Menu.Items className='absolute right-0 top-2 origin-top-right   overflow-hidden   rounded-md   bg-white shadow-md'>
          <div className='flex h-[108px] w-[240px] flex-col items-center justify-center gap-1 bg-[#FEEAA2] md:w-[270px]'>
            <h1 className='text-xl font-bold text-neutral-800'>Fitur</h1>
            <p className='rounded-lg bg-[#FAB317] px-2.5 py-1.5 text-sm text-white shadow-sm'>
              Total 16 Fitur
            </p>
          </div>
          <div className='grid grid-cols-2 '>
            {features.map((feature, index) => {
              return (
                <Link
                  href={feature.link as string}
                  className='bg-neutral-100 '
                  key={index}
                >
                  <Menu.Item
                    as='div'
                    aria-label='User'
                    className={
                      'flex h-full cursor-pointer flex-col items-center gap-2 bg-neutral-100 p-4 transition-all duration-300 ease-in-out hover:bg-neutral-200'
                    }
                  >
                    {feature.icon}
                    <h1 className='text-center text-xs text-neutral-900'>
                      {feature.name}
                    </h1>
                  </Menu.Item>
                </Link>
              );
            })}
          </div>
          <Link href={'/semua-fitur'} passHref>
            <div className='group flex w-full cursor-pointer items-center justify-center bg-neutral-200 py-4 transition-colors duration-300 ease-in-out hover:bg-neutral-300'>
              <h1 className='text-xs text-neutral-500 group-hover:text-neutral-900'>
                Lihat Semua
              </h1>
            </div>
          </Link>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};
