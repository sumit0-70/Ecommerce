import React from 'react'
import Hero from '../components/Hero'
import LatestCollection from '../components/LatestCollection'
import BestSeller from '../components/BestSeller'
import OurPolicy from '../components/OurPolicy'
import NewsletterBox from '../components/NewsletterBox'

const Home = () => {
  return (
    <div>
      
      <Hero/>        {/* Hero component has been mounted on the home page. */}
      <LatestCollection/>     {/* LatestCollection component has been mounted on the home page. */}
      <BestSeller/>     {/* BestSeller component has been mounted on the home page. */}
      <OurPolicy/>      {/* OurPolicy component has been mounted on the home page. */}
      <NewsletterBox/>   
    </div>
  )
}

export default Home
