import React from 'react'
import './CardList.css'
import { Card } from '../Card/Card'

const CardList = (props) => {
    return (
        <div className='cardlist'> 
            {props.monsters.map(monster => (
                <Card monster={monster} /> 
            ))} 
        </div>
    ); 
}

export default CardList