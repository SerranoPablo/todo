import React from 'react';
import ConfettiGenerator from "confetti-js";
import './Finished.css'


function Finished() {
 var confettiSettings = { target: 'my-canvas' };
 var confetti = new ConfettiGenerator(confettiSettings);
 confetti.render();

 return (
  <div className="finished">
   <h1>Congratulations</h1>
   <h2>You have finished all tasks</h2>
  </div>
 )
}

export default Finished
