import React, { FC } from 'react';

interface TitleFormProps {
  title: string;
  subtitle: string;
}

const TitleForm: FC<TitleFormProps> = ({ subtitle, title }) => {
  return (
    <>
      <div className='text-lg font-semibold'>{title}</div>
      <div className='text-sm text-gray-800'>{subtitle}</div>
    </>
  );
};

export default TitleForm;
