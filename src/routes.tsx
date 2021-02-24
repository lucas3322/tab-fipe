import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './components/pages/home';
import PageCarro from './components/pages/PageCarro';

function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/carro" component={PageCarro} />

            </Switch>
        
        </BrowserRouter>
    );
};

export default Routes;