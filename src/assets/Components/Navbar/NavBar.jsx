import './NavBar.css'
import logo from '../../img/FotoVitor.png'

const NavBar = () => {
    return (
        <header className="header">
            <div className="logo">
                <img src={logo} alt="FotoLogo" />
                <a href="/" className='logo'>Portfó<span>lio</span></a>
            </div>

            <nav className="navbar">
                <a href="/">Home</a>
                <a href="/">Sobre</a>
                <a href="/">Projetos</a>
                <a href="/">Fale Comigo</a>
            </nav>
        </header>
    )
}

export default NavBar
