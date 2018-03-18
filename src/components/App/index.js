import React from "react"
import Main from "../Layouts/Main"
import {BrowserRouter, Route} from "react-router-dom"
import Index from "../../modules/Home/Views/Index"
import CharactersIndex from "../../modules/characters/views/Index"
import LoginIndex from "../../modules/auth/Views"

const App = () => (
    <BrowserRouter>
        <Main>
            <Route exact path="/" component={Index}/>
            <Route exact path="/characters" component={CharactersIndex}/>
            <Route exact path="/login" component={LoginIndex}/>
        </Main>
    </BrowserRouter>
)

export default App
