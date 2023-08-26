import React from 'react'
import Navbar from './Navbar'
import Img1 from './images/Contact.png'
import './Cake.css'

const Contact = () => {
    return (
        <>
            <Navbar />
            <div className="Contact-section">
            <div className="img">
                <img src={Img1} alt="" />
            </div>
                <div className="input-text">
                    <h2>Your name:</h2>
                    <input type="text" placeholder='Enter here your name' />
                    <h2>Your Gmail:</h2>
                    <input type="text" placeholder='Enter here your Gmail' />
                    <h2>Your Phone Number:</h2>
                    <input type="text" placeholder='Enter here your Phone Number' />
                    <h2>Message:</h2>
                    <textarea name="" id="" cols="30" rows="8" placeholder='Enter here your message'></textarea>
                    <a href="#" className="btn">Order now</a>
                </div>
            </div>
        </>
    )
}

export default Contact
