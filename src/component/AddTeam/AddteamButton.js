import React from 'react'
import Controls from '../Controls'
import  Popup from '../Popup'
import AddIcon from '@mui/icons-material/Add';
import { useState } from 'react';
import AddteamForm from './AddteamForm';

export default function AddteamButton() {
    let divstyle = {
        padding: '10px',
        position: "absolute",
        right: "10px",
      }
      const[openPopup,setOpenPopup] = useState(false)
  return (
    <>
    
    <div>
      <div style={divstyle}>
      <Controls.Button text="Add Teams" title="ADD TEAMS DETAILS" variant="contained" startIcon={<AddIcon /> }
      onClick={()=> setOpenPopup(true)} />
    </div>
    </div>
      <Popup title="ADD TEAMS DETAILS"
      openPopup ={openPopup}
      setOpenPopup={setOpenPopup}
      >
        <AddteamForm/>
    </Popup>
        </>
  )
}
