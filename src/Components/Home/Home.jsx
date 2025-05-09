import './Home.css'
import homegif from '../../assets/img/development.gif'


function Home() {
  return (
    <div id='home' className='home-Container'>
      <div className="home-my-name">
        <h1>Vitor <span>Barahona</span></h1>
        <h3>Desenvolvedor Front End</h3>
      </div>
      <div className="home-img">
        <img src={homegif} alt="" />
      </div>
    </div>
  )
}
export default Home
