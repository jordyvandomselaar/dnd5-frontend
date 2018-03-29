import React, {Fragment} from "react";
import styled from "styled-components";
import {TextField} from "rmwc/TextField/index";
import {Checkbox} from "rmwc/Checkbox/index";

const Joke = styled.span`
  font-size: 0.8rem;
`;

const SkillListContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

const Skills = () => (
    <Fragment>
        <h2>Skills, what are you amazingly good at? (Or not, we won't judge) <Joke>Okay, maybe a little.</Joke></h2>

        <SkillListContainer>
            <table>
                <thead>
                    <tr>
                        <th>Skill</th>
                        <th>Trained</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><TextField required label="Acrobatics (dex)"/></td>
                        <td><Checkbox label="Trained"/></td>
                    </tr>
                    <tr>
                        <td><TextField required label="Animal handling (Wis)"/></td>
                        <td><Checkbox label="Trained"/></td>
                    </tr>
                    <tr>
                        <td><TextField required label="Arcana (int)"/></td>
                        <td><Checkbox label="Trained"/></td>
                    </tr>
                    <tr>
                        <td><TextField required label="Athletics (str)"/></td>
                        <td><Checkbox label="Trained"/></td>
                    </tr>
                    <tr>
                        <td><TextField required label="Deception (cha)"/></td>
                        <td><Checkbox label="Trained"/></td>
                    </tr>
                    <tr>
                        <td><TextField required label="History (int)"/></td>
                        <td><Checkbox label="Trained"/></td>
                    </tr>
                    <tr>
                        <td><TextField required label="Insight (Wis)"/></td>
                        <td><Checkbox label="Trained"/></td>
                    </tr>
                    <tr>
                        <td><TextField required label="Intimidation (cha)"/></td>
                        <td><Checkbox label="Trained"/></td>
                    </tr>
                    <tr>
                        <td><TextField required label="Investigation (int)"/></td>
                        <td><Checkbox label="Trained"/></td>
                    </tr>
                </tbody>
            </table>

            <table>
                <thead>
                    <tr>
                        <th>Skill</th>
                        <th>Trained</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><TextField required label="Medicine (Wis)"/></td>
                        <td><Checkbox label="Trained"/></td>
                    </tr>
                    <tr>
                        <td><TextField required label="Nature (int)"/></td>
                        <td><Checkbox label="Trained"/></td>
                    </tr>
                    <tr>
                        <td><TextField required label="Perception (Wis)"/></td>
                        <td><Checkbox label="Trained"/></td>
                    </tr>
                    <tr>
                        <td><TextField required label="Performance (cha)"/></td>
                        <td><Checkbox label="Trained"/></td>
                    </tr>
                    <tr>
                        <td><TextField required label="Persuasion (cha)"/></td>
                        <td><Checkbox label="Trained"/></td>
                    </tr>
                    <tr>
                        <td><TextField required label="Religion (int)"/></td>
                        <td><Checkbox label="Trained"/></td>
                    </tr>
                    <tr>
                        <td><TextField required label="Sleight of hand (dex)"/></td>
                        <td><Checkbox label="Trained"/></td>
                    </tr>
                    <tr>
                        <td><TextField required label="Stealth (dex)"/></td>
                        <td><Checkbox label="Trained"/></td>
                    </tr>
                    <tr>
                        <td><TextField required label="Survival (Wis)"/></td>
                        <td><Checkbox label="Trained"/></td>
                    </tr>
                </tbody>
            </table>
        </SkillListContainer>

    </Fragment>
);

export default Skills;
