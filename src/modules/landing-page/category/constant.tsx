import {
  FaBook,
  FaBriefcase,
  FaCamera,
  FaChartBar,
  FaCode,
  FaGamepad,
  FaMusic,
  FaPencilRuler,
} from 'react-icons/fa';

export const jobCategory = [
  {
    title: 'Design',
    icon: (
      <FaPencilRuler
        size={40}
        className='text-primary-base group-hover:text-white'
      />
    ),
    count: 10, // Ubah ke angka sesuai kebutuhan
  },
  {
    title: 'Development',
    icon: (
      <FaCode size={40} className='text-primary-base group-hover:text-white' />
    ),
    count: 20, // Ubah ke angka sesuai kebutuhan
  },
  {
    title: 'Business',
    icon: (
      <FaBriefcase
        size={40}
        className='text-primary-base group-hover:text-white'
      />
    ),
    count: 15, // Ubah ke angka sesuai kebutuhan
  },
  {
    title: 'Marketing',
    icon: (
      <FaChartBar
        size={40}
        className='text-primary-base group-hover:text-white'
      />
    ),
    count: 12, // Ubah ke angka sesuai kebutuhan
  },
  {
    title: 'Education',
    icon: (
      <FaBook size={40} className='text-primary-base group-hover:text-white' />
    ),
    count: 8, // Ubah ke angka sesuai kebutuhan
  },
  {
    title: 'Music',
    icon: (
      <FaMusic size={40} className='text-primary-base group-hover:text-white' />
    ),
    count: 25, // Ubah ke angka sesuai kebutuhan
  },
  {
    title: 'Photography',
    icon: (
      <FaCamera
        size={40}
        className='text-primary-base group-hover:text-white'
      />
    ),
    count: 18, // Ubah ke angka sesuai kebutuhan
  },
  {
    title: 'Gaming',
    icon: (
      <FaGamepad
        size={40}
        className='text-primary-base group-hover:text-white'
      />
    ),
    count: 30, // Ubah ke angka sesuai kebutuhan
  },
];
