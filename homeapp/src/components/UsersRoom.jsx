import React, { useState } from 'react'
import './room.css';
import { Link } from 'react-router-dom'
import NewDevice from './NewDevice';
import Devices from './Devices';


export default function UsersRoom(props) {
    const [show, setShow] = useState(false)

    const showAdding = () => {
        if (show === true) {
            return <NewDevice addNewDevice={props.addNewDevice} changeCondtion={props.changeCondtion} />
        }
    }

    return (
        <div className='div'>


            <Link to={'/'} ><button className='link'> my rooms</button></Link>

            <h4 style={{ marginLeft: '-70%' }}>name: {props.val.name}</h4>
            <h4 style={{ marginLeft: '-60%' }}>type: {props.val.room}</h4>


            {props.val.device.map((val, index) => {
                return <Devices val={val} index={index} key={index} />
            })}

            {props.val.device.map((val, index, key) => {
                let condition = val.condition ? 'green' : 'red'
                return (
                    <button className='device'
                        style={{ backgroundColor: condition }}
                        onClick={() => { props.changeCondtion(props.index, index) }}  >
                        {val}</button>
                )
            })}


            <br></br>
            <br></br>
            <br></br>
            <button onClick={() => { setShow(!show) }} className='addLink'>add device</button>
            {showAdding()}

        </div>
    )
}
