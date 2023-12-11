import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

interface CardCategoryProps {
  category: {
    title: string;
    icon: JSX.Element;
    count: number;
  };
}

const CardCategory = ({ category }: CardCategoryProps) => {
  return (
    <Card className='hover:bg-primary-base group flex items-center p-4 md:block'>
      <div className=''>
        <CardHeader className='mb-2'>
          <CardTitle>{category.icon}</CardTitle>
        </CardHeader>
      </div>
      <div>
        <CardContent className='text-neutrals-700 pb-3 pt-0 group-hover:text-white'>
          <CardTitle>{category.title}</CardTitle>
        </CardContent>
        <CardFooter className='flex gap-4'>
          <p className='text-neutrals-600 text-sm group-hover:text-white '>
            {category.count} jobs available
          </p>
          <FaArrowRight
            size={15}
            className='text-neutrals-700 group-hover:text-white'
          />
        </CardFooter>
      </div>
    </Card>
  );
};

export default CardCategory;
