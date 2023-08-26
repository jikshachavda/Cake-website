import React from 'react'
import Navbar from './Navbar'
import Img1 from './images/Gallery-1.jfif'
import Img2 from './images/Gallery-2.jfif'
import Img3 from './images/Gallery-3.jfif'
import Img4 from './images/Gallery-4.png'
import Img5 from './images/Gallery-5.jfif'
import Img6 from './images/Gallery-6.jfif'
import Img7 from './images/Gallery-7.jfif'
import Img8 from './images/Gallery-8.jfif'
import Img9 from './images/Gallery-9.jfif'

const Gallery = () => {
  return (
    <>
      <Navbar />
      <div className="Gallery-section">
          <img src={Img1} alt="" />
          <img src={Img2} alt="" /> 
          <img src={Img3} alt="" />
          <img src={Img4} alt="" />
          <img src={Img5} alt="" />
          <img src={Img6} alt="" />
          <img src={Img7} alt="" />
          <img src={Img8} alt="" />
          <img src={Img9} alt="" />
      </div>
    </>
  )
}

export default Gallery
