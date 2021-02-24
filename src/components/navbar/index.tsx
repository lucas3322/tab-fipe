import './style.css';
import Logo from '../../dist/logo.png';

export function NavBar(){

    return(
        <header>
            <nav className="navbar navbar-expand-lg">
                <div className="Container">
                    <div className="collapse navbar-collapse">
                        <div className="icon-logo">
                            <a href="#">
                                <img src={Logo} alt="inicio"/>
                            </a>
                        </div>

                        <ul className="navbar-nav m1-auto">
                            <li className="nav-item">
                                <p>Moto</p>
                            </li>
                            <li className="nav-item">
                                <p>Carro</p>
                            </li>
                            <li className="nav-item">
                                <p>Caminhão</p>
                            </li>
                            <li className="nav-item">
                                <p>Favorito</p>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>
        </header>
    );
}



