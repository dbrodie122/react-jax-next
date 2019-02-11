import React from 'react';
const Character = (props) => {
    return (
        <li>
            { props.characterData.name }
            <style jsx>{`
            li {
                width: 260px;
                padding: 25px;
                margin: 5px;
                text-align: center;
                box-sizing: border-box;
                border: 1px solid black;
                transition: all 0.5s;
            }
            li:hover {
                background-color: rgba(123, 456, 789, 0.5)
            }
            `}</style>
        </li>
    )
};

export default Character;