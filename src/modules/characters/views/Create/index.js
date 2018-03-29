// @flow

import React, {Fragment} from "react";
import BasicInformation from "./views/BasicInformation";
import Stats from "./views/Stats";

const Create = () => (
    <Fragment>
        <h1>Let's create a new character</h1>

        <form action="">
            <BasicInformation/>
            <Stats/>
        </form>
    </Fragment>
);

export default Create;
