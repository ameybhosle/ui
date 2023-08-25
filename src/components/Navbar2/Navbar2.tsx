import { Grid , Box , Button , IconButton } from '@mui/material';
import { MenuItem, Select } from '@material-ui/core';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import SendIcon from '@mui/icons-material/Send';
import AppsIcon from '@mui/icons-material/Apps';
import HistoryIcon from '@mui/icons-material/Apps';
import DialpadIcon from '@mui/icons-material/Dialpad';
import CloudSyncIcon from '@mui/icons-material/CloudSync';

const Navbar2 = ()=>{
  const composeMail = ()=>{
    console.log("Compose Mail");
  }
  const mailButton = ()=>{
    console.log("Mail Button");
  }
  const sendButton = ()=>{
    console.log("Send Button");
  }
  const appsButton = ()=>{
    console.log("Apps Button");
  }
  const historyButton = ()=>{
    console.log("History Button");
  }
  const dialButton = ()=>{
    console.log("Dial Button")
  }
  const cloudSyncButton = ()=>{
    console.log("Cloud Sync Button")
  }
    return (
        <Box sx={{ height: '38px', width: '103.1%', marginLeft: '-25px', marginRight: '40px', backgroundColor: 'white' }} >
          <Grid container sx={{ height: '100%' }}>
            <Grid item xs={6} sx={{ height: '100%', display: 'flex', justifyContent: 'flex-start' }}>
              <Button onClick={composeMail} variant="contained" color="primary" sx={{ fontSize: '12px', width: '100px', height: '30px', marginLeft: '30px', marginTop: '2px', borderRadius: '0px' }}>
                <SendIcon sx={{ width: '20px', height: '50px', marginRight: '3px' }} />Compose
              </Button>
              <IconButton onClick={mailButton} sx={{ marginLeft: '15px' }}>
                <MailOutlineIcon sx={{ color: '#518db8' }} />
              </IconButton>
              <IconButton onClick={sendButton} sx={{ marginLeft: '7px' }}>
                <SendIcon sx={{ color: '#518db8' }} />
              </IconButton>
              <IconButton onClick={appsButton} sx={{ marginLeft: '7px' }}>
                <AppsIcon sx={{ color: '#518db8' }} />
              </IconButton >
              <IconButton onClick={historyButton} sx={{ marginLeft: '7px' }}>
                <HistoryIcon sx={{ color: '#518db8' }} />
              </IconButton>
            </Grid>
            <Grid item xs={6} sx={{ height: '100%', display: 'flex', justifyContent: 'flex-end' }}>
              <Select style={{ width: '200px', height: '32px', marginTop: '3px', marginRight: '15px',border:'1px solid black' }} value="General">
                <MenuItem value={"General"}>General</MenuItem>
                <MenuItem value={"dfbh"}>General</MenuItem>
                <MenuItem value={"dfbh"}>General</MenuItem>
              </Select>
              {/* <input style={{ width: '200px', height: '25px', marginTop: '3px', marginRight: '15px' }} /> */}
              <IconButton onClick={dialButton} sx={{ marginRight: '15px' }}>
                <DialpadIcon sx={{ color: '#518db8' }} />
              </IconButton>
              <input style={{ width: '300px', height: '25px', marginTop: '3px', marginRight: '15px' }} placeholder='Search name or type' />
              <IconButton onClick={cloudSyncButton} sx={{ marginRight: '5px' }}>
                <CloudSyncIcon sx={{ color: '#518db8' }} />
              </IconButton>
            </Grid>
          </Grid>
        </Box>
    );
}

export default Navbar2;