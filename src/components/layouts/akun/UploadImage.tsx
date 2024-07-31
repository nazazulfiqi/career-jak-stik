import React, { ChangeEvent, useState } from 'react';
import Avatar from 'react-avatar';

interface UploadImageProps {
  onChange: (file: File | null) => void;
  imageUrl?: string | null;
  name?: string;
}

const UploadImage: React.FC<UploadImageProps> = ({
  onChange,
  imageUrl,
  name,
}) => {
  const [file, setFile] = useState<File | null>(null);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] || null;
    setFile(file);
    onChange(file);
  };

  return (
    <div className='relative flex flex-col items-center'>
      {imageUrl ? (
        <img
          src={imageUrl}
          alt='Profile'
          className='h-20 w-20 rounded-full object-cover'
        />
      ) : (
        <Avatar
          name={name}
          color='#F26800'
          className='rounded-md object-cover'
          size='70'
        />
      )}
      <input
        type='file'
        accept='image/*'
        className='absolute inset-0 cursor-pointer opacity-0'
        onChange={handleChange}
      />
    </div>
  );
};

export default UploadImage;
