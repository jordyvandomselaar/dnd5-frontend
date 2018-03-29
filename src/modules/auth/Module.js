// @flow

import React, {Fragment} from "react"
import {Route} from "react-router-dom"
import Login from "./Views"

const Module = (): React$Element<typeof Fragment> => (
    <Fragment>
        <Route exact path="/login" component={Login}/>
    </Fragment>
)

export default Module
