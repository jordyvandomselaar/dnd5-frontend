// @flow

import React from "react"
import {GridTile, GridTilePrimary, GridTilePrimaryContent} from "rmwc/GridList"
import {Ripple} from "rmwc/Ripple"
import {Icon} from "rmwc/Icon"
import styled from "styled-components"

const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  
  & > i {
      font-size: 60px;
      pointer-events: none;
  }
  
  &:hover {
    cursor: pointer;
  }
`

const NewCharacterGridItem = () => (
    <GridTile>
        <Ripple>
            <GridTilePrimary>
                <GridTilePrimaryContent>
                    <IconContainer>
                        <Icon>add</Icon>
                    </IconContainer>
                </GridTilePrimaryContent>
            </GridTilePrimary>
        </Ripple>
    </GridTile>
)

export default NewCharacterGridItem
