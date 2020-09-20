import React from 'react';
import './LeftBubble.css';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';

function LeftBubble() {
 return (
  <div className="leftBubble">
   <h4>Tip</h4>
   <p>A list of 5 is a great number to start</p>
   <ThumbUpIcon
    className="leftBubble__icon"
    fontSize="small" />
   <div class="leftBubble__triangle"></div>
  </div>
 )
}

export default LeftBubble
