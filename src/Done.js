import React, { useState } from 'react';
import './Done.css';
import SettingsBackupRestoreIcon from '@material-ui/icons/SettingsBackupRestore';

function Done(props) {
 const [back, setBack] = useState(true);
 const [cross, setCross] = useState(true);

 return (
  <div className='done'>
   <h2 className="done__title">{props.title}</h2>
   <div className="done__icons">
    <div
     onMouseOver={() => setBack(!back)}
     onMouseOut={() => setBack(!back)}
     onClick={() => props.reverse(props.title)}>
     {back ? <SettingsBackupRestoreIcon /> : <SettingsBackupRestoreIcon style={{ color: '#06A94D' }} />}
    </div>
   </div>
  </div >
 )
}

export default Done
