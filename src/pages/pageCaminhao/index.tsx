import { NavBar } from '../../components/navbar/index';
import './styles.css';

function PageCaminhao (){
    const marcas = [{nome: "hyundai"}, {nome: "ford"}, {nome: "Renault"}, {nome: "volvo"}]
    return(
        <div className="">
            <NavBar />
            <div className="Wrapper">
                <h1>Paginas de Caminhão</h1>

            </div>
            {
                  marcas.map((lucas, i)=>(
                      <div className="brnad" key={i}>
                          <p>
                          {lucas.nome}
                              </p>
                      </div>
                  ))   
                }
        </div>
    );
};

export default PageCaminhao;