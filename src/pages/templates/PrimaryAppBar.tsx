import AppBar from '@mui/material/AppBar'
import { Drawer, Toolbar, Typography, useMediaQuery } from '@mui/material'
import {useTheme} from '@mui/material/styles'
import { Link } from 'react-router-dom';
import {Box } from "@mui/material"
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useEffect, useState } from 'react';


function PrimaryAppBar() {
  const toggleDrawer= (open:boolean) =>(event:React.MouseEvent)=>{
    console.log("open Deawer")
    SetSideMentu(open)
  }
  const theme = useTheme();
  const [sideMenu , SetSideMentu] = useState(false)
  const  isSmallScreenSize= useMediaQuery(theme.breakpoints.up('sm'))

  // useeffect happen when side action happend to the component 
  // like fetching data from the api and deleting data update data etc user scale teh screen up and down etc .. 
  useEffect(()=>{
    if (isSmallScreenSize && sideMenu){
      SetSideMentu(false);
    }
  } ,[isSmallScreenSize]);
 
  return (
    <>
    <AppBar position="static" sx={{

      
      backgroundColor:theme.palette.background.default ,
       borderBottom:`1 px solid ${theme.palette.divider}`,
        height: theme.primaryAppBar.height,
       minheight: theme.primaryAppBar.height,
       zIndex:(theme)=>theme.zIndex.drawer+2   // the is used to make the appbaralways apper obove the القوائم المنسدلة 

      
       }}>


      <Toolbar variant='dense' sx={
        {
      
        }
      }> 
       {/*  the break point supported by matrial ui  */}

        <Box sx={{display:{xs:"block" , sm:"none"} , mr:1}}>
          <IconButton   
          onClick={toggleDrawer(true)}
          aria-label='open-drawer' 
          edge="start" 
          sx={{mr:2}}>
             <MenuIcon/>
          </IconButton>
        </Box>
        <Drawer anchor='left' open={sideMenu} onClose={toggleDrawer(false)}>
          {[...Array(40)].map((_,i)=>(
            
            <Typography key={i} component="p">
              {i+1}
            </Typography>
          ))}
        </Drawer>
        <Link to='/' style={{ textDecoration: 'none', color: 'black' }}>
          <Typography variant="h6" component="div" noWrap sx={{ display:{fontWeight:700 , letterSpacing:"=0.5px"} }}>
            ChattMO 
          </Typography>
        </Link>
      </Toolbar>

    </AppBar>
    </>
  )
}

export default PrimaryAppBar
