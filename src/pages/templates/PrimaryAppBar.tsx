import AppBar from '@mui/material/AppBar'
import { Toolbar, Typography } from '@mui/material'
import {useTheme} from '@mui/material/styles'
import { Link } from 'react-router-dom';

function PrimaryAppBar() {
  const theme = useTheme();
  return (
    <>
    <AppBar position="static" sx={{backgroundColor:theme.palette.background.default ,
       borderBottom:`1 px solid ${theme.palette.divider}`,
        height: theme.primaryAppBar.height,
       minheight: theme.primaryAppBar.height
      
       }}>
      <Toolbar variant='dense' sx={
        {
      
        }
      }>
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
