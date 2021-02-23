import { NavBar } from '../../navbar/index';
import '../home/styles.css';

 function Home (){
    return(
        
        <body>
            <NavBar />
            <section className="hero" id="home-hero">
                <div className="bg-form d-flex align-items-center">
                    <div className="container">
                        <div className="d-flex">
                            <div className="col-12 text-center mt-5">
                                <h3 className="titulo-principal">Tabela FIPE    </h3>
                                    <h4 className="sub-titulo-principal">
                                        <a className="sub-titulo-principal" href="">carros   </a>
                                        <a className="sub-titulo-principal" href="">motos   </a>
                                        <a className="sub-titulo-principal" href="">caminhões   </a>
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
        </body>
    );
}

export default Home;