import React, { FC } from 'react';

import { aboutData } from '@/constant/about';

const AboutContent: FC = () => {
  return (
    <section className='mx-auto mb-8 w-full max-w-[1440px] bg-white  px-8 md:px-14  lg:px-16 2xl:px-0'>
      <h1 className='text-3xl font-bold'>
        Visi Misi Layanan Karir STMIK Jakarta STI&K
      </h1>
      <div className='mt-4 flex flex-col gap-3'>
        {aboutData.map((data: any, i: number) => (
          <div key={i + 1}>
            <h1 className='text-2xl font-semibold'>{data.title}</h1>
            {data.desc.map((desc: any, i: number) => (
              <p key={i + 1}>
                {i + 1}. {desc}
              </p>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutContent;
