import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { routersMap } from './routersMap';
const Routers = () => (
    <Switch>
        {routersMap.map(({ id, component, path }) => (
            <Route exact key={id} component={component} path={path} />
        ))}
    </Switch>
);

export default Routers;
