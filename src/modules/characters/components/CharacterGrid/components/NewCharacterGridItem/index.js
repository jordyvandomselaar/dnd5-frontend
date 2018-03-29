// @flow

import type {Element} from "react";
import React from "react";
import {GridTile, GridTilePrimary, GridTilePrimaryContent} from "rmwc/GridList";
import {Ripple} from "rmwc/Ripple";
import {Icon} from "rmwc/Icon";
import styled from "styled-components";
import Link from "react-router-dom/es/Link";

const StyledLink = styled(Link)`
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  
  display: flex;
  justify-content: center;
  align-items: center;
  
  text-decoration: none;
  
  & i {
      font-size: 60px;
      pointer-events: none;
      color: #000;
  }
`;

const NewCharacterGridItem = (): Element<GridTile> => (
    <GridTile>
        <Ripple>
            <GridTilePrimary>
                <GridTilePrimaryContent>
                    <StyledLink to="/characters/new">
                        <Icon>add</Icon>
                    </StyledLink>
                </GridTilePrimaryContent>
            </GridTilePrimary>
        </Ripple>
    </GridTile>
);

export default NewCharacterGridItem;
