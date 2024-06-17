import React from 'react'
import Button from './Button'
import Image from 'next/image'

export default function GetApp() {
  return (
    <section className='flexCenter w-full flex-col pb-[100px]'>
      <div className='get-app'>
        <div className='z-20 flex w-full flex-1 flex-col items-start justify-center gap-12'>
          <h2 className='regular-16 text-gray-10'>Get for free now!</h2>
          <p className='regular-16 text-gray-10'>Available on iOs and Android</p>
          <div className='flex w-full flex-col gap-3 whitespace-nowrap xl:flex-row'>
            <Button 
            type='button'
            title='App Store'
            icon='/apple.svg'
            variant='btn_white'
            full
            />
            <Button 
            type='button'
            title='Play Store'
            icon='/android.svg'
            variant='btn_dark_green_outline'
            full
            />
          </div>
        </div>
        <div className='flex flex-1 items-center justify-end'>
          <Image src='/phone.png' alt='phones' width={550} height={870} />
        </div>
      </div>
    </section>
  )
}
