import React from 'react'
import './room.css';
import { Link } from 'react-router-dom'

export default function RoomsList(props) {

    return (
        <div className='div'>
            <h2>my rooms:</h2>

            {props.room.map((val, index, key) => {
                return <Link to={`/usersRoom${val.name}`} key={index}>
                    <button className='room' style={{ backgroundColor: val.color }}>{val.name}</button>
                </Link>
            })}

            <br></br>
            <br></br>
            <Link to={'/new'} ><button className='addLink'>add new room</button></Link>


        </div>
    )
}
