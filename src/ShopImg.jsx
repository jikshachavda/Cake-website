import React from 'react'

const ShopImg = (props) => {
    return (
        <>
            <div div className="shop_section">
                <div className="images">
                    <img src={props.Imgsrc} alt="" />
                </div>
                <div className="details">
                    <h2>{props.Dh2}</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, sequi?</p>
                    <a href="#" className="btn">order now</a>
                </div>
            </div>
        </>
    )
}

export default ShopImg
