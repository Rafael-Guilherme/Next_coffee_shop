'use server'

import { Banner } from '@/components/Banner'

export default async function Home() {

  const handleOnBannerBtnClick = () => {
    console.log('hi banner button')
  }

  return (
    <main className='flex justify-center mt-[50vh]'>
      <Banner buttonText="View stores nearby" handleOnClick={handleOnBannerBtnClick} />
    </main>
  )
}
