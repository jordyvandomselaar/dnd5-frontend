// @flow

import React, {Fragment} from "react"
import Index from "./Views/Index"
import {Route} from "react-router-dom"

const Module = () => (
    <Fragment>
        <Route exact path="/" component={Index}/>
    </Fragment>
)

export default Module
