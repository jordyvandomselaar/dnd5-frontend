import React, {Fragment} from "react";
import {TextField} from "rmwc/TextField/index";

const BattleRelated = () => (
    <Fragment>
        <h2>Battle related information, are you a latex or a platemail kind of person?</h2>

        <TextField required label="Armor Class"/>
        <TextField required label="Initiative"/>
        <TextField required label="Speed"/>
        <TextField required label="Max Hitpoints"/>
    </Fragment>
);

export default BattleRelated;
