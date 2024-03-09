import { FC, ReactElement } from "react";

export const ContentFooter: FC = (): ReactElement => {
  return (
    <div className="px-8 md:px-14 text-neutral-500 flex flex-wrap gap-y-1 justify-between py-4 bg-neutral-100 lg:px-16">
      <h1 className="text-xs">2022 - www.lmsmkows.id - Hak Cipta Dilindungi.</h1>
      <section className="flex gap-5 text-xs">
        <h1>Terms of use</h1>
        <h1>Privacy policy</h1>
      </section>
    </div>
  );
};
