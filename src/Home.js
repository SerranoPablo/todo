import React, { useState } from 'react';
import './Home.css';
import Todo from './Todo';
import Done from './Done';
import Signature from './Signature.js';
import LeftBubble from './LeftBubble.js';
import Finished from './Finished';
import SettingsBackupRestoreIcon from '@material-ui/icons/SettingsBackupRestore';

function Home() {
 const [todo, setTodo] = useState([]);
 const [done, setDone] = useState([]);
 const [text, setText] = useState('');
 const [back, setBack] = useState(true);
 const [num, setNum] = useState(0);

 const addTodo = (newText = text) => {
  if (newText != '') {
   setTodo(oldTodos => [...oldTodos, { title: newText }]);
   setText('');
  }
 }
 const deleteTodo = (titleDelete) => {
  setTodo(todo.filter(item => item.title !== titleDelete));
 }

 const addDone = (titleDone) => {
  setDone(oldDone => [...oldDone, { title: titleDone }]);
  deleteTodo(titleDone);
 }

 const reverseDone = (titleDone) => {
  addTodo(titleDone);
  setDone(done.filter(item => item.title !== titleDone));
 }

 const handleEnter = (event) => {
  if (event.key === 'Enter') {
   addTodo();
  }
 }

 const restartArrays = () => {
  setDone([]);
  setTodo([]);
  setText('');
 }


 return (
  <div className="home">
   <h1>My ToDo App</h1>
   <div className="home__addTask">
    <input
     className="home__input"
     onChange={(event) => setText(event.target.value)}
     value={text}
     onKeyDown={handleEnter}
     type="text" />
    <button onClick={() => addTodo(text)}>Add</button>
   </div>
   <div className="home__listTodos">
    {todo.map((item) => (
     <Todo
      title={item.title}
      delete={deleteTodo}
      add={addDone}
     />
    ))}
   </div>
   <div className="home__listDone">
    {done.map((item) => (
     <Done
      title={item.title}
      delete={deleteTodo}
      reverse={reverseDone}
     />
    ))}
   </div>
   <div className="home__leftBubble">
    {todo.length === 5 ? <LeftBubble /> : <></>}
   </div>
   <div
    className="home__restart"
    onMouseOver={() => setBack(!back)}
    onMouseOut={() => setBack(!back)}
    onClick={restartArrays}>
    {back ? <SettingsBackupRestoreIcon style={{ color: '#fcfcfc' }} /> : <SettingsBackupRestoreIcon style={{ color: '#06A94D' }} />}
   </div>
   <Signature />
   <canvas id="my-canvas">

   </canvas>
   {(todo.length === 0 && done.length > 0) ? <Finished /> : <></>}
  </div>
 )
}

export default Home
