import React from 'react'
import Navbar from './Navbar'
import './Cake.css'

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="content">
          <h2><span>c</span>elebrate <span>y</span>our <span>s</span>pecail <span>d</span>ay <span>w</span>ith <span>s</span>pecail <span>c</span>ake</h2>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem dignissimos deserunt laborum doloribus, veritatis ipsa nostrum ratione, explicabo suscipit quibusdam modi deleniti dolorum necessitatibus illum! Necessitatibus aut ducimus sit expedita.</p>
          <a href="#" className="btn">Read more</a>
        </div>
      </div>
    </>
  )
}

export default Home
