import React, { FC } from 'react';

import Header from '@/components/layouts/perusahaan/Header';
import Sidebar from '@/components/layouts/perusahaan/Sidebar';

interface Props {
  children: React.ReactNode;
}

const PerusahaanLayout: FC<Props> = ({ children }) => {
  return (
    <div className='border-t'>
      <div className=''>
        <div className='flex flex-row'>
          <div className='hidden w-[18%] lg:block'>
            <Sidebar />
          </div>
          <div className='col-span-3 w-[82%] overflow-auto lg:col-span-5 lg:border-l'>
            <div className='px-6 py-6 lg:px-8'>
              <Header />
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PerusahaanLayout;
