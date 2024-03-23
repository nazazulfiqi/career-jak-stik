'use client';

// import { logoutRequest } from '../../../hooks/authentications/request';
import { LucideBuilding, LucideNewspaper, LucideSchool } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { signOut, useSession } from 'next-auth/react';
import { FC, Fragment, ReactElement } from 'react';
import { FaRegUserCircle } from 'react-icons/fa';
import { IoDocumentTextOutline } from 'react-icons/io5';
import { MdLogout } from 'react-icons/md';
import { RiFileSearchLine } from 'react-icons/ri';

import { Navbar } from '@/components/navbar/navbar';
import { LayoutFooter } from '@/components/organisms/footer';
import { Button } from '@/components/ui/button';
import { Toaster } from '@/components/ui/toaster';

import { CareerPlanIcon } from './assets/icons/ic-career-plan';
import { ConsultationIcon } from './assets/icons/ic-consultation';
import { DiscussionRoomIcon } from './assets/icons/ic-disccussion-room';
import { WorkOpportunityIcon } from './assets/icons/ic-work';
import { TBaseLayoutProps } from './types';

// import { useProfile } from '../../../hooks/profile/hook';

const AuthButton: FC = (): ReactElement => (
  <div className='flex gap-4'>
    <Button
      asChild
      className='text-primary-base border-primary-base hover:bg-primary-base h-auto w-auto rounded-md border-2 bg-white px-4 py-1.5 hover:text-white'
    >
      <Link href='/auth/sign-in' type='button'>
        Sign In
      </Link>
    </Button>
    <Button
      asChild
      className='bg-primary-base border-primary-base hover:text-primary-base h-auto w-auto rounded-md border-2 px-4 py-1.5 text-white hover:bg-white'
    >
      <Link href='/auth/sign-up' type='button'>
        Sign Up
      </Link>
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
      name: 'Akun',
      onClick: () => router.push('/akun'),
      icon: <FaRegUserCircle size={20} className='text-primary-base' />,
    },
    {
      name: 'Lamaran Saya',
      onClick: () => {
        return router.push('/lamaran-saya');
      },
      icon: <IoDocumentTextOutline size={20} className='text-blue-600' />,
    },

    {
      name: 'Logout',
      icon: <MdLogout size={20} className='text-red-600' />,
      onClick: async () => {
        await signOut();
      },
    },
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
    avatar: '/images/stmik.png',
  };

  const _mobile_menu_item = [
    {
      name: 'Cari Lowongan',
      icon: <RiFileSearchLine size={20} />,
      href: '/cari-lowongan',
    },
    {
      name: 'Cari Perusahaan',
      icon: <LucideBuilding size={20} />,
      href: '/cari-perusahaan',
    },
    {
      name: 'Berita',
      icon: <LucideNewspaper size={20} />,
      href: '/berita',
    },
    {
      name: 'Tentang Kami',
      icon: <LucideSchool size={20} />,
      href: '/tentan-kami',
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
        logo='/svg/jobsneed-logo.svg'
        logoStyle='max-w-[100px] h-auto'
        userData={_profile_user}
        bottomNavItems={_bottom_nav_items}
        bottomNavRules={_nav_rules}
        bottomNavItemStyle='w-auto h-auto p-3 text-[14px] rounded-lg bg-primary-500 text-white font-reguler'
        button={<AuthButton />}
        withSearch={addSearch}
      />
      <section className='flex h-full flex-col'>{children}</section>
      <Toaster />
      <LayoutFooter />
    </Fragment>
  );
};
