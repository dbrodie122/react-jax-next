import React from 'react';
import Character from './Character';

const CharacterList = (props) => {
    return (
        <ul>
            {props.characters.map(char => <Character key={char.name} characterData={char}/>)}
            <style jsx>{`
            ul {
                list-style: none;
                padding: 0;
                display: flex;
                flex-direction: row;
                flex-wrap: wrap;
                align-items: center;
                justify-content: center;
                width: 800px;
            }
            `}</style>
        </ul>
    )
};

export default CharacterList;