import React, {Fragment} from "react";
import {TextField} from "rmwc/TextField/index";

const Stats = () => (
    <Fragment>
        <h2>Stats, how strong or smart are you?</h2>
        <TextField required label="Strength"/>
        <TextField required label="Dexterity"/>
        <TextField required label="Constitution"/>
        <TextField required label="Intelligence"/>
        <TextField required label="Wisdom"/>
        <TextField required label="Charisma"/>
    </Fragment>
);

export default Stats;
