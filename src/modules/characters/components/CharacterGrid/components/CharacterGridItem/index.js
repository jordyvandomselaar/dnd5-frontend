// @flow

import React from "react"
import {GridTile, GridTilePrimary, GridTilePrimaryContent, GridTileSecondary, GridTileTitle} from "rmwc/GridList/index"
import {Link} from "react-router-dom"
import styled from "styled-components"
import Character from "../../../../Entities/Character"

const CharacterImage = styled.img`
  height: 100%;
  width: 100%;
  
  object-fit: cover;
`

const CharacterGridItem = ({character}: { character: Character }) => (
    <GridTile>
        <GridTilePrimary>
            <GridTilePrimaryContent>
                <Link to={`/characters/${character.id}`}>
                    <CharacterImage src={character.image} alt="Character image"/>
                </Link>
            </GridTilePrimaryContent>
        </GridTilePrimary>
        <GridTileSecondary>
            <GridTileTitle>
                {character.name}
            </GridTileTitle>
        </GridTileSecondary>
    </GridTile>
)

export default CharacterGridItem
