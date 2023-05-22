import { useState } from 'react';

export default function Devices(props) {
    const [bgColor, setBgColor] = useState('rgb(182, 74, 74)');

    const changeColor = () => {
        if (bgColor === 'rgb(182, 74, 74)') {
            setBgColor('rgb(62, 120, 101)');
        }
        else if (bgColor === 'rgb(62, 120, 101)') {
            setBgColor('rgb(182, 74, 74)')
        }
    }

    return (
        <div>
            <button button style={{ backgroundColor: bgColor }} onClick={changeColor}
                className='device'> {props.val}</button>

        </div >
    )
}
