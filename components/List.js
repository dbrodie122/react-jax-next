import React from 'react';
import Item from './Item';

const List = (props) => {
    return (
        <ul>
            {props.data.map(dataItem => <Item key={dataItem.name} data={dataItem}/>)}
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

export default List;