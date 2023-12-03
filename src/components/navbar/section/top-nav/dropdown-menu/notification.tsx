import { AiOutlineBell } from 'react-icons/ai';

export const NavbarNotification = () => {
  return (
    <div
      id='notif-menu'
      aria-label='notif-menu'
      className='flex h-9 w-9  flex-col items-center  justify-center rounded-md bg-neutral-100 p-2 '
    >
      <AiOutlineBell className='text-xl ' />
    </div>
  );
};
