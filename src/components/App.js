import React from 'react';

import CardNew from '../containers/CardNew';
import Cards from '../containers/Cards';

import Layout from './Layout';

import NotFound from '../containers/NotFound';

import CardEdit from '../containers/CardEdit';

import {BrowserRouter, Route, Switch} from 'react-router-dom';

import CardDetailsContainer from '../containers/CardDetailsContainer';

// Componente App que engloba toda la aplicación
function App() {
    return(
        // Browser Router es el componente que engloba una aplicación que funcionará como SPA (Single Page Application).
        // Layout es un componente plantilla que permite reutilizar elementos que se van a repetir en toda la aplicación.
        // Switch es el componente que permite asegurar que solo se renderize una Route. 
        // Route cuando hay un match con el path se hace un render del component asignado. 
        // Link toma el lugar del elemento <a></a>, evitando que se recargue la página. 
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route exact path="/cards" component={Cards} />
                    <Route exact path="/cards/new" component={CardNew} />
                    <Route exact path="/cards/:cardId" component={CardDetailsContainer} />
                    <Route exact path="/cards/:cardId/edit" component={CardEdit} />
                    <Route component={NotFound} />
                </Switch>
            </Layout>
        </BrowserRouter>
    );
}

export default App;