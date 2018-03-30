import React, {Fragment} from "react";
import AddableInputList from "../../../components/AddableInputList";
import styled from "styled-components";

const TraitContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

const Personal = () => (
    <Fragment>
        <h2>Some personal information, hope you don't mind me asking</h2>

        <TraitContainer>
            <div>
                <strong>Personality Traits</strong>
                <div>
                    <AddableInputList label="Personality Trait"/>
                </div>
            </div>
            <div>
                <strong>Ideals</strong>
                <div>
                    <AddableInputList label="Ideals"/>
                </div>
            </div>
            <div>
                <strong>Bonds</strong>
                <div>
                    <AddableInputList label="Bonds"/>
                </div>
            </div>
            <div>
                <strong>Flaws (We all have 'em)</strong>
                <div>
                    <AddableInputList label="Flaws"/>
                </div>
            </div>
        </TraitContainer>
    </Fragment>
);

export default Personal;
