import {Box , CssBaseline} from "@mui/material"
import PrimaryAppBar from "./templates/PrimaryAppBar"


function Home() {
  return (
    <>
    <Box sx={{display:"flex" , flexDirection:"column" , alignItems:"center" , justifyContent:"center" , height:"100vh"}}>
        <CssBaseline/>
        <PrimaryAppBar/>
        This Home Page  Updated 
    </Box>
    </>
  )
}

export default Home
