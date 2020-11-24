import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Redirect from '../pages/Redirect';
import Stats from '../pages/Stats';

function Routes() {
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/:code" component={Redirect} />
            <Route exact path="/:code/stats" component={Stats} />
        </Switch>
    </BrowserRouter>
}

export default Routes;