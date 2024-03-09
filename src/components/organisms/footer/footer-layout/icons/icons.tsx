import { FC, ReactElement } from 'react';
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from 'react-icons/fa';

export const FooterIcons: FC = (): ReactElement => {
  return (
    <div className='flex flex-wrap items-center justify-between gap-y-4'>
      <div className='flex gap-x-6 text-lg text-neutral-800'>
        <FaFacebookF className='hover:text-version3-500 cursor-pointer transition-colors duration-300 ease-in-out' />
        <FaTwitter className='hover:text-version3-500 cursor-pointer transition-colors duration-300 ease-in-out' />
        <FaLinkedinIn className='hover:text-version3-500 cursor-pointer transition-colors duration-300 ease-in-out' />
        <FaInstagram className='hover:text-version3-500 cursor-pointer transition-colors duration-300 ease-in-out' />
      </div>

      <iframe
        title='Google Map'
        width='50%'
        height='80'
        frameBorder='0'
        style={{ border: 0 }}
        src=' https://maps.google.com/maps?q=stmik+jakarta+sti%26k&t=&z=13&ie=UTF8&iwloc=&output=embed'
        allowFullScreen
      />
    </div>
  );
};
