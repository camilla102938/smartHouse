import {BrowserRouter,Routes,Route} from 'react-router-dom'
import { useState } from 'react';
import './App.css';
import Title from './components/Title';
import NewRoom from './components/NewRoom';
import RoomsList from './components/RoomsList';
import UsersRoom from './components/UsersRoom';




function App() {

  const [room , setRoom] =useState([])
    // {room:'bedroom',name:'A',color:'lightgreen' ,device:['lamp','ac','phone']},
    // {room:'kitchen',name:'b',color:'green' ,device:['tv']}
    // ])


    const addNewRoom =(r,n,c)=>{
      let temp = {
        room:r,
        name:n,
        color:c,
        device:[]
      }
      setRoom([...room,temp])
    }

    const addNewDevice = (index, d) => {
      let temp = {device:d}
      room[index].device.push(d);
      setRoom([...room[index],temp]);
      }


      const changeCondtion = (indexOfroom,indexOfProduct)=>{
        room[indexOfroom].device[indexOfProduct].condition = !room[indexOfroom].device[indexOfProduct].condition
        setRoom(...[room])
        
        }


      

  return (
    <div className="App">
      <br></br>
      <Title/>
      <BrowserRouter>
      <Routes>

        {room.map((val,index)=>{
          return <Route path={`/usersRoom${val.name}`} 
          element={<UsersRoom val={val} index={index} key={index} 
          room={room[index]} addNewDevice={addNewDevice} changeCondtion={changeCondtion}/>}/>
        })}

        <Route path='/' element={<RoomsList room={room}/>}/>
        <Route path='/new' element={<NewRoom room={room} setRoom={setRoom} addNewRoom={addNewRoom}/>}/>
      </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
