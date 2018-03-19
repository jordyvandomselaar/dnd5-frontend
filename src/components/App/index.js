import React from "react"
import Main from "../Layouts/Main"
import {BrowserRouter} from "react-router-dom"
import AuthModule from "../../modules/auth/Module"
import CharactersModule from "../../modules/characters/Module"
import HomeModule from "../../modules/Home/Module"

const App = () => (
    <BrowserRouter>
        <Main>
            <HomeModule/>
            <AuthModule/>
            <CharactersModule/>
        </Main>
    </BrowserRouter>
)

export default App
