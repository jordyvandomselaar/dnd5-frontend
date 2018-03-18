import React from "react"
import {GridTile, GridTilePrimary, GridTilePrimaryContent, GridTileSecondary, GridTileTitle} from "rmwc/GridList/index"

const CharacterGridItem = ({character}) => (
    <GridTile>
        <GridTilePrimary>
            <GridTilePrimaryContent>
                <img src={character.image} alt="Character image"/>
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
