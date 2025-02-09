import './Sobre.css'
import fotoSobre from '../../assets/img/FotoVitor.png'
import CurriculumVitae from '../../assets/cv/CurriculumVitorBarahonaFrontEnd.pdf'

function Sobre() {
  return (
    <div id='sobre' className='sobre-Container'>
        <div className="foto-sobre">
          <img src={fotoSobre} alt="" />
        </div>
        <div className="descr-sobre">
          <h2>Sobre mim</h2>
          <p>Eu sou um Programador Front End, tenho experiencia e conhecimento criando aplicações com HTML, CSS,
            JavaScript, React e Node.</p>
          <button><a href={CurriculumVitae} target="_blank">Download Curriculum</a></button>
        </div>
      </div>
  )
}

export default Sobre
