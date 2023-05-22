import React from 'react'
import './room.css';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'

export default function NewRoom(props) {
    const nav = useNavigate()
    const [room, setRoom] = useState('');
    const [name, setName] = useState('');
    const [color, setColor] = useState('');


    const validName = () => {
        if (name.length > 5 || name.length < 1) {
            alert('name invalid')
            return nav('/')
        }
    }


    return (
        <div className='div'>
            <h2>add a new room</h2>
            <Link to={'/'} ><button className='link'> my rooms</button></Link>
            <br></br>
            <br></br>
            <br></br>

            room <select onChange={(e) => { setRoom(e.target.value) }} className="select">
                <option disabled>choose room</option>
                <option >choose room</option>
                <option value={'bedRoom'} >bedroom</option>
                <option value={'bathRoom'} >bathroom</option>
                <option value={'kitchen'} >kitchen</option>
            </select>
            <br></br>
            <br></br>
            name <input onChange={(e) => { setName(e.target.value) }} type={'text'} placeholder={'enter name for the room'} className="select"></input> <br></br>
            <br></br>
            color <input onChange={(e) => { setColor(e.target.value) }} type={'color'} placeholder='enter coler for the room' className='new'></input> <br></br>
            <br></br>
            <button onClick={() => { props.addNewRoom(room, name, color); nav('/'); validName() }}>ADD</button><br></br>

            <br></br>

        </div >
    )
}
