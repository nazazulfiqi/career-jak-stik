import React, { FC } from 'react';

import PerusahaanLayout from '@/components/layouts/perusahaan';

import PostingLowonganContent from '@/modules/perusahaan/posting-lowongan/content';

const PostingLowonganModule: FC = () => {
  return (
    <PerusahaanLayout>
      <PostingLowonganContent />
    </PerusahaanLayout>
  );
};

export default PostingLowonganModule;
