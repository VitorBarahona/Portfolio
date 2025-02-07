import './NavBar.css'
import logo from '../../assets/img/FotoVitor.png'

const NavBar = () => {
    return (
        <header className="header">
            <div className="logo">
                <a href="/" className='logo'>
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
        </header>
    )
}

export default NavBar
