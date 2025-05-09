import "./Sobre.css";
import fotoSobre from "../../assets/img/FotoVitor.png";
import CurriculumVitae from "../../assets/cv/CurriculumVitorBarahonaFrontEnd.pdf";

function Sobre() {
  return (
    <div id="sobre" className="sobre-Container">
      <div className="foto-sobre">
        <img src={fotoSobre} alt="" />
      </div>
      <div className="descr-sobre">
        <h2>Sobre Mim</h2>
        <p>
          💻 Desenvolvedor Fullstack | Frontend & Backend | SQL | Node.js |
          React | Next.Js
        </p>
        <p>
          Profissional com experiência em suporte a sistemas e análise de dados
          em BI. Atualmente, atuo como
          desenvolvedor fullstack freelancer, criando soluções web modernas e
          escaláveis. Tenho experiência no desenvolvimento de aplicações
          frontend com Next.Js, React, HTML, CSS, Tailwind e JavaScript,
          garantindo interfaces responsivas e intuitivas. No backend, utilizo
          Node.js, Express e API REST, integrando serviços e gerenciando bancos
          de dados como MySQL, PostgreSQL, SQL Server e MongoDB. Além disso,
          aplico boas práticas de versionamento (Git/GitHub), Clean Code e
          metodologias ágeis (Scrum) para entregar código de qualidade. Sou
          apaixonado por resolver problemas e criar soluções eficientes. Busco
          constantemente aprimorar minhas habilidades e estou aberto a
          oportunidades para atuar em projetos inovadores.
        </p>
        {/* <p>
          🔹 Habilidades: Desenvolvimento Fullstack, APIs, Banco de Dados, BI,
          Suporte a Sistemas 
        </p>
        <p>🔹 Experiência: Projetos freelancer e
        desenvolvimento de sistemas web escaláveis</p>
        <p>
          🔹 Formação: DevQuest - Desenvolvedor Fullstack | Pós em Análise de Dados e BI
        </p>
        <p>🔹 Aberto a oportunidades!</p> */}

        <p>
          🔹 Habilidades: Desenvolvimento Fullstack, APIs, Banco de Dados, BI, Suporte a Sistemas <br />        
          🔹 Experiência: Projetos freelancer e desenvolvimento de sistemas web escaláveis <br />        
          🔹 Formação: DevQuest - Desenvolvedor Fullstack | Pós em Análise de Dados e BI <br />        
          🔹 Aberto a oportunidades!
        </p>


        <button>
          <a href={CurriculumVitae} target="_blank">
            Download Curriculum
          </a>
        </button>
      </div>
    </div>
  );
}

export default Sobre;
