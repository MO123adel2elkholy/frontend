import {Box , CssBaseline} from "@mui/material"
import PrimaryAppBar from "./templates/PrimaryAppBar"


function Home() {
  
  return (
    <>
    <Box sx={{display:"flex"}}>
        <CssBaseline/>
        <PrimaryAppBar/>
        This Home Page  Updated 
    </Box>
    </>
  )
}

export default Home
