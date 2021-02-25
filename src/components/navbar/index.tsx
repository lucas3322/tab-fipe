import './style.css';
import Logo from '../../dist/logo.png';
import { Link } from 'react-router-dom';

export function NavBar(){

    return(
        <header>
            <nav className="navbar navbar-expand-lg">
                <div className="Container">
                    <div className="collapse navbar-collapse">
                        <div className="icon-logo">
                            <Link to="/">
                                <img src={Logo} alt="inicio"/>
                            </Link>
                        </div>

                        <ul className="navbar-nav m1-auto">
                            <li className="nav-item">
                                <Link to="/moto">
                                    <p>Moto</p>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/carro">
                                    <p>Carro</p>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/caminhao">
                                    <p>Caminhão</p>
                                </Link>
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



