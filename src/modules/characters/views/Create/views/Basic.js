import React, {Fragment} from "react";
import {TextField} from "rmwc/TextField/index";

const Basic = () => (
    <Fragment>
        <h2>Some basic information</h2>

        <TextField required label="Character name"/>
        <TextField required label="Class"/>
        <TextField required label="Level"/>
        <TextField required label="Background"/>
        <TextField required label="Race"/>
        <TextField required label="Alignment"/>
        <TextField required label="Experience points"/>
    </Fragment>
);

export default Basic;
