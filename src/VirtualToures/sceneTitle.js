import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import axios from "axios"

export default function FormDialog() {
  const [open, setOpen] = React.useState(false);
  const [scenename, setScenename]=React.useState("");
  const [sceneImage,setSceneImage]=React.useState("");
  const [url, setUrl] = React.useState(null);
  const onChangescenename=(event)=>{
    setScenename(event.target.value)
    console.log(scenename)
  }
  const onChangesceneImage=(event)=>{
    const selectedFile=event.target.files[0]
    
    console.log(sceneImage)
    const reader = new FileReader();
    reader.onloadend = () => {
      setSceneImage(selectedFile)
      setUrl(reader.result);
    };
    reader.readAsDataURL(selectedFile);
    console.log(url)
  }
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const createScene=()=>{
 
    const apiUrl="https://database2-adarsh057.onrender.com/creteScene"
    const formData=new FormData()
    formData.append("scenename",scenename);
    formData.append("sceneImage",url);
    console.log(sceneImage)
    axios.post(apiUrl,formData).then(response=>{
      
    console.log(response.data)
   })
    .catch(error => {
     console.log(error);
    })
  }

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen} className='mt-3'>
        Create Scene
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Scene</DialogTitle> 
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here. We
            will send updates occasionally.
          </DialogContentText>
        
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="scene Name"
            type="text"
            fullWidth
            variant="standard"
            onChange={onChangescenename}
          />
        <input type="file" className="form-control mt-3" onChange={onChangesceneImage}/>
        {url && <img src={url} alt="uploaded image" className='thumb-360-image'/>}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={createScene}>Create</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}