// @flow

import type {Node} from "react";
import React from "react";
import MainMenu from "./MainMenu";
import "material-components-web/dist/material-components-web.css";
import styled from "styled-components";

const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  overflow: auto;
  width: 100%;
  height: 100%;
`;

const Root = styled.div`
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    display: flex;
    overflow: hidden;
    
    * {
      box-sizing: border-box;
    }
`;

type Props = {
    children: Array<Node>
}

const Main = ({children}: Props): React$Element<typeof Root> => (
    <Root>
        <MainMenu/>
        <Content>
            {children}
        </Content>
    </Root>
);

export default Main;
