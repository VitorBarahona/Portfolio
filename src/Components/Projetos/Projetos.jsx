import './Projetos.css'
import logoNetflix from '../../assets/img/netflix.png'
import logoMarioBros from '../../assets/img/LogoSuperMarioBros.png'
import logoCronometro from '../../assets/img/crono.png'

function Projetos() {
  return (
    <div id='projetos' className='projectsContainer'>
      <h2>Principais Projetos</h2>
      <div className="projectsCards">
        <div className="card">
          <img src={logoNetflix} alt="Logo Netflix" />
          <h5>Netflix</h5>
          <p className='ProjectDescription'>Este projeto consiste no desenvolvimento da tela de login da Netflix, recriada com as melhores práticas de design e desenvolvimento web. O objetivo foi replicar o layout fiel ao design oficial.
          </p>
          <p className='ProjetcTecnologies'>
            Tecnologias: HTML e CSS.
          </p>
          <a target='_blank' href="https://projeto-netflix-rosy.vercel.app/">Projeto</a>
          <a target='_blank' href="https://github.com/VitorBarahona/ProjetoNetflix">Código</a>
        </div>
        <div className="card">
          <img src={logoMarioBros} alt="Logo Starbucks" />
          <h5>Jogo Mário Bros.</h5>
          <p className='ProjectDescription'>Este projeto é uma recriação do clássico Super Mario Bros, utilizando @keyframes. O objetivo foi recriar o jogo de plataforma 2D para rodar diretamente no navegador, utilizando apenas tecnologias web.</p>
            <p className='ProjetcTecnologies'>
            Tecnologias: HTML, CSS e JavaScript.
          </p>
          <a target='_blank' href="https://projeto-jogo-mario-six.vercel.app/">Projeto</a>
          <a target='_blank' href="https://github.com/VitorBarahona/ProjetoJogoMario">Código</a>
        </div>
        <div className="card">
          <img src={logoCronometro} alt="Logo Cronômetro" />
          <h5>Cronometro</h5>
          <p className='ProjectDescription'>Este projeto consiste em um cronômetro digital simples. Ele permite ao usuário iniciar, pausar e resetar a contagem do tempo, proporcionando uma interface intuitiva e responsiva.</p>
            <p className='ProjetcTecnologies'>
            Tecnologias: HTML, CSS e JavaScript.
          </p>
          <a target='_blank' href="https://projeto-cronometro-beige.vercel.app/">Projeto</a>
          <a target='_blank' href="https://github.com/VitorBarahona/ProjetoCronometro">Código</a>
        </div>
      </div>
    </div>
  )
}

export default Projetos