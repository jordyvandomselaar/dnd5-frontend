import React, {Fragment} from "react"
import Index from "./views/Index"
import {Route} from "react-router-dom"

const Module = () => (
    <Fragment>
        <Route exact path="/characters" component={Index}/>
    </Fragment>
)

export default Module
