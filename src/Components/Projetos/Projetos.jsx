import './Projetos.css'
import logoNetflix from '../../assets/img/netflix.png'
import logoStarbucks from '../../assets/img/starbucks.png'
import logoCronometro from '../../assets/img/crono.png'

function Projetos() {
  return (
    <div id='projetos' className='projetos-Container'>
       <h2>Principais Projetos</h2>
        <div className="cards-projects">
            <div className="card">
                <img src={logoNetflix} alt="Logo Netflix" />
                <h5>Netflix</h5>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum adipisci asperiores quos excepturi
                    eaque quasi natus placeat neque totam quidem alias, architecto beatae laboriosam fugit doloribus
                    velit. Perspiciatis, et beatae!</p>
                  <a href="https://vitorbarahona.github.io/Netflix/">Projeto</a>
                  <a href="https://vitorbarahona.github.io/Netflix/">Código</a>
            </div>
            <div className="card">
                <img src={logoStarbucks} alt="Logo Starbucks" />
                <h5>Starbucks</h5>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum adipisci asperiores quos excepturi
                    eaque quasi natus placeat neque totam quidem alias, architecto beatae laboriosam fugit doloribus
                    velit. Perspiciatis, et beatae!</p>
                    <a href="https://vitorbarahona.github.io/Netflix/">Projeto</a>
                    <a href="https://vitorbarahona.github.io/Netflix/">Código</a>
            </div>
            <div className="card">
                <img src={logoCronometro} alt="Logo Cronômetro" />
                <h5>Cronometro</h5>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum adipisci asperiores quos excepturi
                    eaque quasi natus placeat neque totam quidem alias, architecto beatae laboriosam fugit doloribus
                    velit. Perspiciatis, et beatae!</p>
                    <a href="https://vitorbarahona.github.io/Netflix/">Projeto</a>
                    <a href="https://vitorbarahona.github.io/Netflix/">Código</a>
            </div>
        </div>
    </div>
  )
}

export default Projetos