import React from 'react'
import './Home.css'
import fotoHome from '../../assets/img/back.webp'

function Home() {
  return (
    <div id='home' className='home-Container'>
      <div className="home-my-name">
        <h1>Vitor <span>Barahona</span></h1>
        <h3>Desenvolvedor Front End</h3>
      </div>
      <div className="home-img">
        <img src={fotoHome} alt="" />
      </div>
    </div>
  )
}

export default Home
