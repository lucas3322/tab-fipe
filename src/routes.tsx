import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/home';
import PageCarro from './pages/PageCarro';
import PageMoto from './pages/pageMoto';
import PageCaminhao from './pages/pageCaminhao';

function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/carro" component={PageCarro} />
                <Route path="/moto" component={PageMoto} />
                <Route path="/caminhao" component={PageCaminhao} />

            </Switch>
        
        </BrowserRouter>
    );
};

export default Routes;