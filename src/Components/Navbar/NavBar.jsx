import "./NavBar.css";
import logo from "../../assets/img/FotoVitor.png";

const NavBar = () => {
  return (
    <header className="header">
      <div className="logo">
        <a href="/" className="logo">
          <img src={logo} alt="FotoLogo" />
          Portfó<span>lio</span>
        </a>
      </div>

      <nav className="navbar">
        <a href="/#home">Home</a>
        <a href="/#sobre">Sobre</a>
        <a href="/#projetos">Projetos</a>
        <a href="/#contato">Contato</a>
      </nav>

      <div className="menu-hamburguer">
        {/* <!-- Funcionad com Chekbox -> Checado = menu aberto, se não = menu fechado --> */}
        <input type="checkbox" id="menu-toggle" />
        <label htmlFor="menu-toggle" className="menu-icon">
          <div className="linha"></div>
          <div className="linha"></div>
          <div className="linha"></div>
        </label>

        <div className="overlay">
          <nav className="menu">
            <ul>
              <li>
                <a href="/#home">Home</a>
              </li>
              <li>
                <a href="/#sobre">Sobre</a>
              </li>
              <li>
                <a href="/#projetos">Projetos</a>
              </li>
              <li>
                <a href="/#contato">Contato</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
