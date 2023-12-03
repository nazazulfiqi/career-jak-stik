'use client';

// import { logoutRequest } from '../../../hooks/authentications/request';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { FC, Fragment, ReactElement } from 'react';
import { FaRegUserCircle } from 'react-icons/fa';
import { FcDocument } from 'react-icons/fc';
import { MdDashboard, MdLogout } from 'react-icons/md';

import { TBaseLayoutProps } from './types';
import { DiscussionRoomIcon } from './assets/icons/ic-disccussion-room';
import { CareerPlanIcon } from './assets/icons/ic-career-plan';
import { ConsultationIcon } from './assets/icons/ic-consultation';
import { WorkOpportunityIcon } from './assets/icons/ic-work';

import { TbCategory2 } from 'react-icons/tb';
import { Button } from '@/components/ui/button';
import { Navbar } from '@/components/navbar/navbar';

// import { useProfile } from '../../../hooks/profile/hook';

const AuthButton: FC = (): ReactElement => (
  <div className='flex gap-4'>
    <Button
      // href='/auth/login'
      type='button'
      className='border-primary-base text-primary-500 h-auto w-auto rounded-lg border-2 px-4 py-1.5'
    >
      Masuk
    </Button>
    <Button
      // href='/auth/register'
      type='button'
      className='border-primary-500 bg-primary-500 h-auto w-auto rounded-lg border-2 px-4 py-1.5 text-white'
    >
      Daftar
    </Button>
  </div>
);

export const BaseLayout: FC<TBaseLayoutProps> = ({
  children,
  title,
  addSearch,
}): ReactElement => {
  const router = useRouter();
  const { data } = useSession();

  const _pop_up_menu = [
    {
      name: 'Beranda',
      onClick: () => router.push('/beranda'),
      icon: <MdDashboard size={20} className='text-primary-base' />,
    },
    {
      name: 'Profile',
      onClick: () => {
        return router.push('/profile');
      },
      icon: <FaRegUserCircle size={20} className='text-warning-base' />,
    },
    {
      name: 'Administrasi',
      icon: <FcDocument size={20} className='text-success-base' />,
      onClick: () => router.push('/administrasi'),
    },
    // {
    //   name: 'Logout',
    //   icon: <MdLogout size={20} className='text-error-base' />,
    //   onClick: async () => {
    //     await logoutRequest({
    //       refresh_token: data?.user?.token?.refresh_token as string,
    //     });
    //   },
    // },
  ];

  const _bottom_nav_items = [
    {
      name: 'Beranda',
      link: '/beranda',
    },
    {
      name: 'Studi Ku',
      link: '/studi-ku',
    },
    {
      name: 'Penugasan',
      link: '/penugasan',
    },
    {
      name: 'Rencana Studi',
      link: '/rencana-studi',
    },
    {
      name: 'Nilai & Sertifikat',
      link: '/nilai-dan-sertifikat',
    },
  ];

  const _features = [
    {
      name: 'Panduan',
      link: '/panduan',
      icon: <CareerPlanIcon />,
    },
    {
      name: 'Konsultasi Layanan',
      link: '/konsultasi-dan-layanan',
      icon: <ConsultationIcon />,
    },
    {
      name: 'Penyaluran Kerja',
      link: '/penyaluran-kerja',
      icon: <WorkOpportunityIcon />,
    },
    {
      name: 'Ruang Diskusi',
      link: '/ruang-diskusi',
      icon: <DiscussionRoomIcon />,
    },
  ];

  const _nav_rules = [
    '/beranda',
    '/studi-ku',
    '/penugasan',
    '/rencana-studi',
    '/nilai-dan-sertifikat',
  ];

  // const { data: profileData } = useProfile();
  const _profile_user = {
    // email: profileData?.data?.user?.email as string,
    // full_name: profileData?.data?.user?.full_name as string,
    // avatar: profileData?.data.user.avatar as string,
    email: 'zulfiqinaza@gmail.com',
    full_name: 'Naza Zulfiqi',
    avatar: '#',
  };

  const _mobile_menu_item = [
    {
      name: 'Semua Fitur',
      icon: <TbCategory2 className='p-1 text-3xl text-neutral-500' />,
      href: '/semua-fitur',
    },
  ];

  return (
    <Fragment>
      {/* <Head>
        <title>Kampus Gratis - {title}</title>
      </Head> */}
      <Navbar
        mobileMenuItems={_mobile_menu_item}
        items={_pop_up_menu}
        features={_features}
        logo={'/images/logo-kg-new.svg'}
        logoStyle='w-auto h-auto'
        userData={_profile_user}
        bottomNavItems={_bottom_nav_items}
        bottomNavRules={_nav_rules}
        bottomNavItemStyle={`w-auto h-auto p-3 text-[14px] rounded-lg bg-primary-500 text-white font-reguler`}
        button={<AuthButton />}
        withSearch={addSearch}
      />
      <section className='flex h-full flex-col'>{children}</section>
    </Fragment>
  );
};
