import React from 'react'
import Navbar from './Navbar'
import Img from './ImgData.jsx'
import ShopImg from './ShopImg'

const Shop = () => {
    return (
        <>
            <Navbar />
            <div className="shop-container">
                {Img.map((value, ind) => {
                   return <ShopImg key={ind} Imgsrc={value.Imgsrc} Dh2={value.Dh2} />
                })}
        </div>
        </>
    )
}

export default Shop
