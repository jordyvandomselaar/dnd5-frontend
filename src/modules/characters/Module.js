// @flow

import React, {Fragment} from "react";
import Index from "./views/Index";
import {Route, Switch} from "react-router-dom";
import Show from "./views/Show";
import Create from "./views/Create";

const Module = () => (
    <Fragment>
        <Switch>
            <Route exact path="/characters" component={Index}/>
            <Route exact path="/characters/new" component={Create}/>
            <Route exact path="/characters/:id" component={Show}/>
        </Switch>
    </Fragment>
);

export default Module;
