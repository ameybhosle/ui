import { Box, Grid, IconButton } from "@mui/material";
import PollIcon from '@mui/icons-material/Poll';
import StackedLineChartIcon from '@mui/icons-material/StackedLineChart';
import SettingsIcon from '@mui/icons-material/Settings';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import Typography from '@mui/material/Typography';
import { Avatar } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';


const Navbar1 = () => {
    const stackedLineButton = ()=>{
        console.log("stackedLineButton clicked");
    }
    const pollButton = ()=>{
        console.log("pollButton clicked");
    }
    const peopleIcon = ()=>{
        console.log("peopleIcon clicked");
    }
    const settingIcon = ()=>{
        console.log("settingIcon clicked");
    }
    const profileClicked = ()=>{
        console.log("Profile CLicked");
    }
    return (
        <Box sx={{ height: '38px', width: '103.1%', marginLeft: '-25px', marginRight: '40px', backgroundColor: '#518db8' }}>
            <Grid container >
                <Grid item xs={4}>
                    <IconButton sx={{ marginLeft: '170px' }} onClick={stackedLineButton}>
                        <StackedLineChartIcon fontSize='small' sx={{ color: 'white' }} />
                    </IconButton>
                    <IconButton sx={{ marginLeft: '20px' }} onClick={pollButton}>
                        <PollIcon fontSize='small' sx={{ color: 'white' }} />
                    </IconButton>
                    <IconButton sx={{ marginLeft: '20px' }} onClick={peopleIcon}>
                        <PeopleAltIcon fontSize='small' sx={{ color: 'white' }} />
                    </IconButton>
                    <IconButton sx={{ marginLeft: '20px' }} onClick={settingIcon}>
                        <SettingsIcon fontSize='small' sx={{ color: 'white' }} />
                    </IconButton>
                </Grid>
                <Grid item xs={4}>
                    <Typography sx={{ textAlign: 'center', color: 'white' }} variant="h6" component="h6">
                        Agent Desktop For Amazon Connect
                    </Typography>
                </Grid>
                <Grid item xs={4} sx={{ marginTop: '4px' }}>
                    <Grid container>
                        <Grid item xs={6}>
                            <input style={{ 'marginLeft': '200px', height: '24px' }} placeholder='After task work' />
                        </Grid>
                        {/* style={{ display: 'flex', justifyContent: 'flex-end' }} */}
                        <Grid item xs={6} >
                            <Avatar sx={{ backgroundColor: '#ebf0ec', width: '35px', height: '35px', marginTop: '-2px', marginLeft: '200px' }} onClick={profileClicked}>
                                <AccountCircleIcon sx={{}} />
                            </Avatar>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    );
}

export default Navbar1;