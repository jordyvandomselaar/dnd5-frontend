import React, {Fragment} from "react";
import {TextField} from "rmwc/TextField/index";

const BattleRelated = () => (
    <Fragment>
        <h2>Battle related information, are you a latex or a platemail kind of person?</h2>

        <TextField required label="Armor Class"></TextField>
        <TextField required label="Initiative"></TextField>
        <TextField required label="Speed"></TextField>
        <TextField required label="Max Hitpoints"></TextField>
    </Fragment>
);

export default BattleRelated;
