import React from "react"
import {Drawer, DrawerContent, DrawerHeader} from "rmwc/Drawer"

import {List, ListItem} from "rmwc/List"
import styled from "styled-components"
import {withRouter} from "react-router-dom"

const StyledDrawer = styled(Drawer)`
  height: 100%;
`

const LinkItem = withRouter(({url, children, history}) => (
    <ListItem onClick={
        () => history.push(url)
    }>{children}</ListItem>
))

const MainMenu = () => (
    <StyledDrawer permanent>
        <DrawerHeader>Menu</DrawerHeader>
        <DrawerContent>
            <List>
                <LinkItem url="/">Home</LinkItem>
                <LinkItem url="/characters">Characters</LinkItem>
                <LinkItem url="/login">Login</LinkItem>
            </List>
        </DrawerContent>
    </StyledDrawer>
)

export default MainMenu
