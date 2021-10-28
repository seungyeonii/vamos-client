import React from 'react';
import Board from './Board';

const DataList = ({items, deleteBoard}) => {
    console.log(items)
    return (
        <div style={{width:'fit-content'}}>
            {
                items.map((item, index) => {
                    return <Board item={item} deleteBoard={deleteBoard} key={item.id}/>
                })
            }
        </div>
    );
};

export default DataList;