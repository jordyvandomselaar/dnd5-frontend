import React from "react"
import MainMenu from "./MainMenu"
import "material-components-web/dist/material-components-web.css"
import styled from "styled-components"

const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
`

const Root = styled.div`
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    display: flex;
`

const Main = ({children}) => (
    <Root>
        <MainMenu></MainMenu>
        <Content>
            {children}
        </Content>
    </Root>
)

export default Main
