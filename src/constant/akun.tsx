import { LucideLogOut } from 'lucide-react';
import { IoMdLock } from 'react-icons/io';
import { RiUserSettingsFill } from 'react-icons/ri';

export const akunMenuData = [
  {
    icon: <RiUserSettingsFill size={24} />,
    title: 'Profil',
    link: '/akun',
  },
  {
    icon: <IoMdLock size={24} />,
    title: 'Ubah Kata Sandi',
    link: '/akun/kata-sandi',
  },
  {
    icon: <LucideLogOut size={24} />,
    title: 'Keluar',
    link: '/',
  },
];
