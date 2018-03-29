// @flow

import React, {Fragment} from "react";
import BasicInformation from "./views/BasicInformation";
import Stats from "./views/Stats";
import Skills from "./views/Skills";

const Create = () => (
    <Fragment>
        <h1>Let's create a new character</h1>

        <form action="">
            <BasicInformation/>
            <Stats/>
            <Skills/>
        </form>
    </Fragment>
);

export default Create;
