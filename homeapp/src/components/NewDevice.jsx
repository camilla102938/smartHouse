import { useState } from 'react';
import './room.css';

export default function Device(props) {

    const [product, setProduct] = useState('')

    return (
        <div >
            <select onChange={(e) => { setProduct(e.target.value) }} className="select">
                <option disabled>choose device</option>
                <option >choose devise</option>
                <option value='lamp' >lamp</option>
                <option value='sterio' >sterio</option>
                <option value='waterHeater' >water heater</option>
                <option value='AC' >AC</option>
            </select>
            <br></br>
            <br></br>
            <button onClick={() => { props.addNewDevice(props.index, product) }} style={{ marginBottom: '20px' }}>ADD</button>

        </div>
    )
}

