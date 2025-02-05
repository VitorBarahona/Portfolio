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
                <a href="/#">Home</a>
                <a href="/#">Sobre</a>
                <a href="/#">Projetos</a>
                <a href="/#">Contato</a>
            </nav>
        </header>
    )
}

export default NavBar
