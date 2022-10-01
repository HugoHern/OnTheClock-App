import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import AlarmAddIcon from '@mui/icons-material/AlarmAdd';
import AlarmOffIcon from '@mui/icons-material/AlarmOff';
import Modal from '../components/Modal';


export default function Clockin() {

  const [openModal, setOpenModal] = React.useState(false) //this will set if the modal opens

  const clockIn = () => {
    setOpenModal(true)
  }

  
  const clockOut = () => {
   
    setOpenModal(true)
  }


  return (
    <>
    <Stack direction="row" spacing={2}>
     
      <Button variant="contained" color="success" startIcon={<AlarmAddIcon/>}  onClick={() => {clockIn()}}>
        Clock In
      </Button>
      <Button variant="outlined" color="error" startIcon={<AlarmOffIcon/>}  onClick={() => {clockOut()}}>
        Clock Out
      </Button>
      
    </Stack>
    {openModal && <Modal closeModal={setOpenModal}/>}
    </>
  );
}
