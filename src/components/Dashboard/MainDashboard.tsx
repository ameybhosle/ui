import LeftDashboard from "./LeftDashboard";
import RightDashboard from "./RightDashboard";
import { Grid } from "@mui/material";

const MainDashboard = () => {
    return (
        <Grid container sx={{ width: '100%', marginTop: '10px' }}>
            <LeftDashboard />
            <Grid item xs={0.2}></Grid>
            <RightDashboard />
        </Grid>
    );
}

export default MainDashboard;