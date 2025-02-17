import './Projetos.css'
import { projectList } from "./ProjectsList.js"

function Projetos() {
  return (
    <div id='projetos' className='projectsContainer'>
      <h2>Principais Projetos</h2>
      <div className="projectsCards">
        {projectList.map((item) => (
          <div className="card" key={item.id}>
            <img src={item.img} alt="Logo Netflix" />
            <h5>{item.name}</h5>
            <p className='ProjectDescription'>{item.description}</p>
            <p className='ProjetcTecnologies'>{item.tecnologias}</p>
            <a target='_blank' href={item.projectLink}>Projeto</a>
            <a target='_blank' href={item.projectCode}>Código</a>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projetos