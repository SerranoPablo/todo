import React, { useState } from 'react';
import './Todo.css';
import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';

function Todo(props) {
 const [tick, setTick] = useState(true);
 const [cross, setCross] = useState(true);

 return (
  <div className='todo'>
   <h2 className="todo__title">{props.title}</h2>
   <div className="todo__icons">
    <div>
     <div
      onMouseOver={() => setTick(!tick)}
      onMouseOut={() => setTick(!tick)}
      onClick={() => props.add(props.title)} >
      {tick ? <CheckIcon /> : <CheckIcon style={{ color: '#06A94D' }} />}
     </div>
    </div>

    <div
     onMouseOver={() => setCross(!cross)}
     onMouseOut={() => setCross(!cross)}
     onClick={() => props.delete(props.title)} >
     {cross ? <CloseIcon /> : <CloseIcon style={{ color: '#B53737' }} />}
    </div>
   </div>
  </div >
 )
}

export default Todo
