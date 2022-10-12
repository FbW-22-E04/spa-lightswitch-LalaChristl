import './Room.css'
import { useState } from "react";

const Room = () => {


    const [isOn, toggleIsOn] = useState(false);
console.log(isOn);
console.log(toggleIsOn);
  return (

    <div className={`room ${isOn ? 'lit' : 'dark'}`}>

    
    <button onClick={() => toggleIsOn(!isOn)}>Light Switch</button>
</div>
  
  );

}



export default Room


// {
//     showModal === true ?
//         <div className='
//         absolute 
//         bg-yellow-200 
//         w-[300px]
//         h-[300px]
//         flex
//         items-center
//         justify-center
//         '><button onClick={() => setShowModal(false)}>Close</button></div>
//     : null
// }