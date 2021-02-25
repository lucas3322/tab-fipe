import { NavBar } from '../../components/navbar/index';
import '../home/styles.css';
import chevrolet from '../../dist/Chevrolet.png';
import fiat from '../../dist/Fiat.png';
import ford from '../../dist/Ford.png';
import hyundai from '../../dist/Hyundai.png';
import renault from '../../dist/Renault.png';
import volkswagen from '../../dist/Volkswagen.png';



 function Home (){
    return(
        
        <body>
            <NavBar />
         <div className="wrapper">
            <section className="hero" id="home-hero">
                <div className="bg-form d-flex align-items-center">
                    <div className="container">
                        <div className="d-flex">
                            <div className="col-12 text-center mt-5">
                                <h3 className="titulo-principal">Tabela FIPE    </h3>
                                    <h4 className="sub-titulo-principal">
                                        <a className="sub-titulo-principal" href="#">carros   </a>
                                        <a className="sub-titulo-principal" href="#">motos   </a>
                                        <a className="sub-titulo-principal" href="#">caminhões   </a>
                                    </h4>
                                    <h1 className="h2 title mb-3 texto-home-principal">Venha conferir quando vale o seu veículo !!!</h1>
                            </div>
                            <div className="row text-center justify-content-center mt-2 fase-1 flex-wrap">
                                <div className="col-md3">
                                    <select name="tipoVeiculo" id="tipoVeiculo" className="form-control" data-size="7" data-style="btn btn-simple btn-round" title="tipo">
                                        <option value="">Selecione o tipo</option>
                                        <option value="1">Carro</option>
                                        <option value="2">Motor</option>
                                        <option value="3">Caminhões</option>
                                    </select>
                                </div>
                                <div className="col-md3">
                                    <select name="marcaVeiculo" id="marcaVeiculo" className="form-control" data-size="7" data-style="btn btn-simple btn-round" title="marca" disabled>
                                        <option value="">Selecione a marca</option>
                                    </select>
                                </div>
                                <div className="col-md4">
                                    <select name="modeloVeiculo" id="modeloVeiculo" className="form-control" data-size="7"
                                    data-style="btn btn-simple btn-round" title="modelo" disabled>
                                        <option value="">Selecione o Modelo</option>
                                    </select>
                                </div>
                                <div className="col-md2">
                                    <select name="anoVeiculo" id="anoVeiculo" className="form-control" data-size="7" data-style="btn btn-simple btn-round" title="Ano" disabled>
                                        <option value="">Selecione o Ano</option>
                                    </select>
                                </div>
                                <br/>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="br-marcas">
                <div className="container">
                    <div className="titulo-p-marcas">
                        <h3 className="titledrop mb-0 pt-2">Principais marcas</h3>
                    </div>
                    <div className="logo-marcas">
                        <div className="col-md-2 col-sm-4 col-6 pt-mb-3">
                            <a href="#">
                                <img src={chevrolet} title="chevrolet" alt="chevrolet" />
                            </a>
                        </div>
                        <div className="col-md-2 col-sm-4 col-6 pt-mb-3">
                            <a href="#">
                                <img src={fiat} title="fiat" alt="fiat" />
                            </a>
                        </div>
                        <div className="col-md-2 col-sm-4 col-6 pt-mb-3">
                            <a href="#">
                                <img src={ford} title="fiat" alt="fiat" />
                            </a>
                        </div>
                        <div className="col-md-2 col-sm-4 col-6 pt-mb-3">
                            <a href="#">
                                <img src={hyundai} title="hyundai" alt="hyundai" />
                            </a>
                        </div>
                        <div className="col-md-2 col-sm-4 col-6 pt-mb-3">
                            <a href="#">
                                <img src={renault} title="renault" alt="renault" />
                            </a>
                        </div>
                        <div className="col-md-2 col-sm-4 col-6 pt-mb-3">
                            <a href="#">
                                <img src={volkswagen} title="volkswagen" alt="volkswagen" />
                            </a>
                        </div>
                    </div>
                    <div className="boton-nav">
                        <div className="col-md-4 car">
                            <a className="btn btn-secundary" href="#">Tabela FIPE carros</a>
                        </div>
                        <div className="col-md-4 mot">
                            <a className="btn btn-secundary" href="#">Tabela FIPE motos</a>
                        </div>
                        <div className="col-md-4 cam">
                            <a className="btn btn-secundary" href="#">Tabela FIPE caminhões</a>
                        </div>
                        <br/>
                        <br/>
                        
                    </div>
                </div>
            </div>
        </div>
        </body>
    );
}

export default Home;