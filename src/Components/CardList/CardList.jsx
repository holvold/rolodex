import React from 'react';
import './CardList.css'

export const CardList = (props) => {
    return (
        <h1 className='cardlist'> 
            {props.monsters.map(monster => (
            <h1 key={monster.id}> {monster.name} </h1>
            ))} 
        </h1>
    ); 
}

export default CardList