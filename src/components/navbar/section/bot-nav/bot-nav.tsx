import Link from 'next/link';
import { FC, ReactElement } from 'react';
import { TBottomNavProps } from './types';
import { usePathname } from 'next/navigation';

export const BottomNav: FC<TBottomNavProps> = ({
  bottomNavItemStyle,
  bottomNavItems,
}): ReactElement => {
  // const router = useRouter();
  const pathname = usePathname();
  return (
    <nav className='hidden w-full bg-neutral-50 px-6 sm:flex md:px-14 lg:px-16 '>
      <div className='mx-auto w-full max-w-[1440px] gap-4 border-b-[1px] border-t-[1px] border-neutral-100  py-3 sm:flex'>
        {bottomNavItems.map((item, index) => {
          return (
            <Link
              href={item.link}
              key={index}
              className={`${
                pathname.includes(item.link)
                  ? bottomNavItemStyle
                  : 'hover:text-version3-500 '
              }  px-4 py-2.5 text-sm transition-all duration-300 ease-in-out`}
            >
              <p>{item.name}</p>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};
