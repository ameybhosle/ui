import Container from '@mui/material/Container';
import Navbar1 from './Navbar1/Navbar1';
import Navbar2 from './Navbar2/Navbar2';
import MainDashboard from './Dashboard/MainDashboard';


const Main = ()=>{
    return(
        <Container maxWidth={false} sx={{ height: '100vh', backgroundColor: '#ebf0ec' }} >
            <Navbar1 />
            <Navbar2 />
            <MainDashboard />
        </Container>
    );
}

export default Main;