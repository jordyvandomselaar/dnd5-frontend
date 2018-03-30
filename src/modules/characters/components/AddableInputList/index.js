import React, {Component} from "react";
import {TextField} from "rmwc/TextField/index";
import {Fab} from "rmwc/Fab/index";
import styled from "styled-components";

const FabContainer = styled.div`
    float: right;
    padding-top: 30px;
    padding-right: 10px;
`;

const Container = styled.div`
    display: inline-block;
`;

const InputContainer = styled.div``;

const TrashFabContainer = styled.div`
  display: inline;
  top: 45px;
  position: relative;
  padding-left: 10px;
  float: right;
`;

class AddableInputList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            inputs: [0],
        };
    }

    render() {
        const {label, type = "text"} = this.props;

        const inputs = this.state.inputs.map((_, index) => (
            <InputContainer key={index}>
                <TextField label={label} type={type}></TextField>
                <TrashFabContainer>
                    <Fab mini onClick={e => this.removeInput(e, index)}>delete</Fab>
                </TrashFabContainer>
            </InputContainer>
        ));

        return (
            <Container>
                {inputs}

                <FabContainer>
                    <Fab onClick={e => this.addInput(e)}>add</Fab>
                </FabContainer>
            </Container>
        );
    }

    addInput(e) {
        e.preventDefault();

        this.setState({
            inputs: [...this.state.inputs, 0],
        });
    }

    removeInput(e, index) {
        e.preventDefault();

        this.setState(prevState => {
            prevState.inputs.splice(index, 1);

            return prevState;
        });
    }
}

export default AddableInputList;
