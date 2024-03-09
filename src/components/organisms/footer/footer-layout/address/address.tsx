import { FC, ReactElement } from 'react';

export const FooterAddress: FC = (): ReactElement => {
  return (
    <div className=' text-neutral-900'>
      <h1 className='mb-3 text-base font-bold lg:mb-2'>Alamat</h1>

      <ul className='flex flex-col gap-1 text-xs md:text-sm lg:gap-3 xl:gap-4'>
        <li className='flex gap-2 '>
          <section className='flex min-w-[70px] justify-between'>
            <span>Alamat</span>
            <span>:</span>
          </section>
          <span>
            Jl. BRI Radio Dalam No.17, RT.14/RW.3, Gandaria Utara, Kec. Kby.
            Baru, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12140
          </span>
        </li>
      </ul>
    </div>
  );
};
