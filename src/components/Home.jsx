import React from 'react'
import MainSlide from './MainSlide'
import DoubleImage from './DoubleImage'
import Quote from './Quote'
import ProductSlide from './ProductSlide'
import ResourceSlide from './ResourceSlide'
import '../App.css';

function Home() {
  return (
    <div>
      <MainSlide/>
      <DoubleImage/>
      <Quote/>
      <ProductSlide/>
      <ResourceSlide/>
    </div>
  )
}

export default Home
