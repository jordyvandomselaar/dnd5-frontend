import React, {Fragment} from "react";
import AddableInputList from "../../../components/AddableInputList";

const Personal = () => (
    <Fragment>
        <h2>Some personal information, hope you don't mind me asking</h2>

        <div>
            <strong>Personality Traits</strong>
            <div>
                <AddableInputList/>
            </div>
        </div>
        <div>
            <strong>Ideals</strong>
        </div>
        <div>
            <strong>Bonds</strong>
        </div>
        <div>
            <strong>Flaws (We all have 'em)</strong>
        </div>
    </Fragment>
);

export default Personal;
