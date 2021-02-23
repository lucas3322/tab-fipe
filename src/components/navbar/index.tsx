import './style.css';

export function NavBar(){

    return(
        <header>
            <nav className="navbar navbar-expand-lg">
                <div className="Container">
                    <div className="collapse navbar-collapse">
                        <div className="icon-logo">
                            
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



