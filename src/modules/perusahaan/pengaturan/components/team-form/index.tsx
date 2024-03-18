import { InstagramIcon, LinkedinIcon } from 'lucide-react';
import React, { FC } from 'react';

import FieldInput from '@/components/organisms/FieldInput';

import DialogAddTeam from './DialogAddTeam';

// interface TeamFormProps {
//   teams: CompanyTeam[] | undefined;
// }

const teams = [
  {
    id: 1,
    name: 'John Doe',
    position: 'CTO',
  },
];

const TeamForm: FC = () => {
  return (
    <FieldInput
      title='Basic Information'
      subtitle='Add team members of your company'
    >
      <div className='mb-5 w-[65%]'>
        <div className='flex flex-row items-center justify-between'>
          <div className='text-lg font-semibold'>20 Members</div>
          <DialogAddTeam />
        </div>
        <div className='mt-6 grid grid-cols-3 gap-5'>
          {teams?.map((item: any) => (
            <div key={item.id} className='p-3 text-center shadow'>
              <div className='mx-auto h-14 w-14 rounded-full bg-gray-300' />
              <div className='mt-4 font-semibold'>{item.name}</div>
              <div className='text-sm text-gray-500'>{item.position}</div>

              <div className='mx-auto mt-5 inline-flex gap-3 text-gray-500'>
                <InstagramIcon className='h-4 w-4' />
                <LinkedinIcon className='h-4 w-4' />
              </div>
            </div>
          ))}
        </div>
      </div>
    </FieldInput>
  );
};

export default TeamForm;
