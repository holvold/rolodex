import React from 'react'
import './CardStyle.css'

export const Card = (props) => (
    <div key={props.monster.id} className='card-container'>
        <img alt="monster" src={`https://robohash.org/${props.monster.id}?set=set2?size=180x180`}/>
        <h2> {props.monster.name} </h2>  
        <h3> {props.monster.email} </h3>
    </div>
)

