// @flow

import React from "react"
import {GridList} from "rmwc/GridList"
import CharacterGridItem from "./components/CharacterGridItem"
import Character from "../../Entities/Character"
import NewCharacterGridItem from "./components/NewCharacterGridItem"

const character = new Character(1, "Gentoo", "https://static1.squarespace.com/static/53ec2edfe4b063ce9288b6a6/543f5f59e4b0f1329193af54/5454143fe4b022af53febe39/1414796840260/Baland+the+Harvester-PlaceholderArt.jpg?format=1500w")

const CharacterGrid = () => (
    <GridList>
        <NewCharacterGridItem/>
        <CharacterGridItem character={character}/>
        <CharacterGridItem character={character}/>
        <CharacterGridItem character={character}/>
        <CharacterGridItem character={character}/>
        <CharacterGridItem character={character}/>
        <CharacterGridItem character={character}/>
        <CharacterGridItem character={character}/>
        <CharacterGridItem character={character}/>
        <CharacterGridItem character={character}/>
        <CharacterGridItem character={character}/>
        <CharacterGridItem character={character}/>
        <CharacterGridItem character={character}/>
        <CharacterGridItem character={character}/>
        <CharacterGridItem character={character}/>
        <CharacterGridItem character={character}/>
    </GridList>
)

export default CharacterGrid
