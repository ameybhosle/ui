import { Grid, Box, Divider } from "@mui/material"
import Typography from '@mui/material/Typography';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PhoneCallbackIcon from '@mui/icons-material/PhoneCallback';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import MessageIcon from '@mui/icons-material/Message';

const LeftDashboard = () => {
    return (
        <Grid item xs={3} sx={{ height: '85.7vh', backgroundColor: 'white',borderRadius:'10px' }}>
            <Box sx={{ width: '100%', height: '100%' }}>
                <Typography variant='h6' fontWeight="bold" sx={{ marginLeft: '15px' }}>
                    Active Interactions
                </Typography>
                <Box sx={{ marginLeft: '10px', height: '65%', marginRight: '10px', marginTop: '10px' }}>
                    <Box sx={{ height: '80px', width: '100%', backgroundColor: '#ebf0ec', borderRadius: '7px' }}>
                        <Grid container>
                            <Grid item xs={2}>
                                <WorkOutlineIcon sx={{ marginLeft: '13px', marginTop: '20px' }} />
                            </Grid>
                            <Grid item xs={8}>
                                <Typography sx={{ fontWeight: 'bold', fontSize: '14px', marginTop: '15px' }}>Customer Complaint Care</Typography>
                                <Typography sx={{ fontWeight: 'bold', fontSize: '13px' }}>General</Typography>
                            </Grid>
                            <Grid item xs={2}>
                                <Typography sx={{ fontSize: "10px", marginLeft: '15px', marginTop: '10px' }}>01:23</Typography>
                                <AccessTimeIcon sx={{ marginLeft: '10px' }} />
                            </Grid>
                        </Grid>
                    </Box>
                    <Box sx={{ height: '50px', width: '100%', backgroundColor: '#ebf0ec', marginTop: '10px', borderRadius: '7px' }}>
                        <Box sx={{ height: '80px', width: '100%', backgroundColor: '#ebf0ec', borderRadius: '7px' }}>
                            <Grid container>
                                <Grid item xs={2}>
                                    <MailOutlineIcon sx={{ marginLeft: '13px', marginTop: '50%' }} />
                                </Grid>
                                <Grid item xs={8}>
                                    <Typography sx={{ fontWeight: 'bold', fontSize: '14px', marginTop: '10px' }}>Twitter</Typography>
                                    <Typography sx={{ fontWeight: 'bold', fontSize: '12px' }}>Email Support</Typography>
                                    <Typography sx={{ fontWeight: 'bold', fontSize: '12px' }}>jane@1234gmai.com</Typography>
                                </Grid>
                                <Grid item xs={2} sx={{ display: 'flex', justifyContent: 'flex-start' }}>
                                    <Typography sx={{ fontSize: "10px", marginTop: '20px', marginLeft: '10px' }}>01:23</Typography>
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                    <Box sx={{ height: '50px', width: '100%', backgroundColor: '#ebf0ec', marginTop: '40px', borderRadius: '7px' }}>
                        <Box sx={{ height: '80px', width: '100%', backgroundColor: '#ebf0ec', borderRadius: '7px' }}>
                            <Grid container>
                                <Grid item xs={2}>
                                    <MailOutlineIcon sx={{ marginLeft: '13px', marginTop: '50%' }} />
                                </Grid>
                                <Grid item xs={8}>
                                    <Typography sx={{ fontWeight: 'bold', fontSize: '14px', marginTop: '10px' }}>Twitter</Typography>
                                    <Typography sx={{ fontWeight: 'bold', fontSize: '13px' }}>Email Support</Typography>
                                    <Typography sx={{ fontWeight: 'bold', fontSize: '13px' }}>jane@1234gmai.com</Typography>
                                </Grid>
                                <Grid item xs={2} sx={{ display: 'flex', justifyContent: 'flex-start' }}>
                                    <Typography sx={{ fontSize: "10px", marginLeft: '10px', marginTop: '20px' }}>01:23</Typography>
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                </Box>
                <Box sx={{ height: '10px', backgroundColor: '#ebf0ec', borderRadius: '10px' }}>
                </Box>
                <Box sx={{ marginLeft: '10px', height: '23%', marginRight: '10px' }}>
                    <Grid container sx={{ width: '100%', height: '114%'}}>
                        <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'flex-start', width: '100%', height: '25%' }}>
                            <PhoneCallbackIcon sx={{ width: '20px', height: '20px', marginTop: '6px', marginLeft: '10px' }} />
                            <Typography sx={{ fontSize: '10px', fontWeight: 'bold', textAlign: 'center', marginLeft: '50px',marginTop:'5px' }}>Waiting in Queue</Typography>
                            <Typography sx={{ marginTop: '18px', marginLeft: '-40px', color: 'green', fontWeight: 'bold' }}>0</Typography>
                            <Typography sx={{ fontSize: '10px', fontWeight: 'bold', textAlign: 'center', marginLeft: '60px',marginTop:'5px' }}>LongestWaiting Time</Typography>
                            <Typography sx={{ marginTop: '18px', marginLeft: '-80px', color: 'green', fontWeight: 'bold' }}>00:00</Typography>
                            <Divider orientation="horizontal" />
                        </Grid>
                        <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'flex-start', width: '100%', height: '25%' }}>
                            <MessageIcon sx={{ width: '20px', height: '20px', marginTop: '6px', marginLeft: '10px' }} />
                            <Typography sx={{ fontSize: '10px', fontWeight: 'bold', textAlign: 'center', marginLeft: '50px',marginTop:'2px' }}>Waiting in Queue</Typography>
                            <Typography sx={{ marginTop: '13px', marginLeft: '-40px', color: 'green', fontWeight: 'bold' }}>0</Typography>
                            <Typography sx={{ fontSize: '10px', fontWeight: 'bold', textAlign: 'center', marginLeft: '60px',marginTop:'3px' }}>LongestWaiting Time</Typography>
                            <Typography sx={{ marginTop: '16px', marginLeft: '-80px', color: 'green', fontWeight: 'bold' }}>00:00</Typography>
                        </Grid>
                        <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'flex-start', width: '100%', height: '25%' }}>
                            <MailOutlineIcon sx={{ width: '20px', height: '20px', marginTop: '6px', marginLeft: '10px' }} />
                            <Typography sx={{ fontSize: '10px', fontWeight: 'bold', textAlign: 'center', marginLeft: '50px' }}>Waiting in Queue</Typography>
                            <Typography sx={{ marginTop: '10px', marginLeft: '-40px', color: 'red', fontWeight: 'bold' }}>0</Typography>
                            <Typography sx={{ fontSize: '10px', fontWeight: 'bold', textAlign: 'center', marginLeft: '60px' }}>LongestWaiting Time</Typography>
                            <Typography sx={{ marginTop: '13px', marginLeft: '-80px', color: 'red', fontWeight: 'bold' }}>00:00</Typography>
                        </Grid>
                        <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'flex-start', width: '100%', height: '25%' }}>
                            <MailOutlineIcon sx={{ width: '20px', height: '20px', marginTop: '6px', marginLeft: '10px' }} />
                            <Typography sx={{ fontSize: '10px', fontWeight: 'bold', textAlign: 'center', marginLeft: '50px' }}>Waiting in Queue</Typography>
                            <Typography sx={{ marginTop: '10px', marginLeft: '-40px', color: 'red', fontWeight: 'bold' }}>0</Typography>
                            <Typography sx={{ fontSize: '10px', fontWeight: 'bold', textAlign: 'center', marginLeft: '60px' }}>LongestWaiting Time</Typography>
                            <Typography sx={{ marginTop: '13px', marginLeft: '-80px', color: 'red', fontWeight: 'bold' }}>00:00</Typography>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Grid>
    );
}

export default LeftDashboard;