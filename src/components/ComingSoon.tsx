'use client';

import Image from 'next/image';

export function ComingSoon() {
  return (
    <div className='flex flex-col gap-5 items-center justify-center overflow-hidden absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
      <div className='flex items-center justify-center'>
        <Image
          src="/KosmeoLogo-Idea6_Option3.1-logoSemFundoCorte.PNG"
          alt="Kosmeo Logo"
          width={300}
          height={300}
          className="object-contain"
        />
      </div>
      <h1 className='text-secondary font-extrabold text-3xl md:text-4xl lg:text-6xl text-center flex items-center justify-center font-comfortaa'>
        COMING SOON
      </h1>
      <h2 className='text-secondary text-md md:text-xl lg:text-2xl text-center font-bold flex items-center justify-center font-comfortaa'>
        jewelry • handcrafted with heart, designed by soul
      </h2>
    </div>
  );
}
