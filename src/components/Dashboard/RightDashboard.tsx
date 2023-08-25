import { Grid, Box, Typography, Button } from "@mui/material";

const RightDashboard = () => {
    const submitDetails = ()=>{
        console.log("DETAILS");
    }
    return (
        <Grid item xs={8.8} sx={{ backgroundColor: 'white', borderRadius: '10px'}} >
            <Box sx={{ width: '100%', height: '100%' }}>
                <Box sx={{width:'100%',height:'25%'}}>
                    <Typography sx={{fontWeight:'bold',marginLeft:'10px'}}>eMite Reporting</Typography>
                </Box>
                <Box sx={{width:'100%',height:'75%',backgroundColor:'#1885c4'}}>
                    <Box sx={{width:'350px',height:'350px',backgroundColor:'#ebf0ec',position:'absolute',top:'130px',left:'1050px'}}>
                        <Typography sx={{marginLeft:'10px',marginTop:'10px',fontSize:'20px',fontWeight:'bold'}}>LOG IN</Typography>
                        <Typography sx={{marginLeft:'20px',marginTop:'20px'}}>User Name:</Typography>
                        <input style={{marginLeft:'20px',width:'260px'}} />
                        <Typography sx={{marginLeft:'20px',marginTop:'20px'}}>Password:</Typography>
                        <input style={{marginLeft:'20px',width:'260px'}} /><br />
                        <input type="checkbox" style={{marginLeft:'20px',marginTop:'10px'}} />
                        <Typography sx={{marginTop:'-22px',marginLeft:'40px'}}>Remember Me</Typography>
                        <Button onClick={submitDetails} variant="contained" color="primary" sx={{marginLeft:'250px',height:'30px',marginBottom:'10px'}}>Log In</Button>
                        <a href="#" style={{fontSize:'15px',marginLeft:'15px',marginTop:'90px'}}>Click her to reuest access or learn more about </a>
                        <a href="#" style={{fontSize:'15px',marginLeft:'15px'}}>emite</a>
                        <Typography sx={{marginLeft:'200px',marginTop:'10px'}}><a style={{textDecoration:'none'}} href="#">Forget Password</a></Typography>
                    </Box>
                </Box>
            </Box>
        </Grid>
    );
}

export default RightDashboard;