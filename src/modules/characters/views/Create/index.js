// @flow

import React, {Fragment} from "react";
import Basic from "./views/Basic";
import Stats from "./views/Stats";
import Skills from "./views/Skills";
import BattleRelated from "./views/BattleRelated";
import Personal from "./views/Personal";
import ProficienciesAndLanguages from "./views/ProficienciesAndLanguages";

const Create = () => (
    <Fragment>
        <h1>Let's create a new character</h1>

        <form action="">
            <Basic/>
            <Stats/>
            <Skills/>
            <BattleRelated/>
            <Personal/>
            <ProficienciesAndLanguages/>
        </form>
    </Fragment>
);

export default Create;
