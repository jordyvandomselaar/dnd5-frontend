// @flow

import React, {Fragment} from "react";
import Index from "./views/Index";
import {Route} from "react-router-dom";
import Show from "./views/Show";
import Create from "./views/Create";

const Module = () => (
    <Fragment>
        <Route exact path="/characters" component={Index}/>
        <Route exact path="/characters/:id" component={Show}/>
        <Route exact path="/characters/new" component={Create}/>
    </Fragment>
);

export default Module;
