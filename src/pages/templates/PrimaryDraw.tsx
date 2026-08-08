import { Drawer, Typography, useMediaQuery, Box } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { useEffect, useState } from 'react'
import ToggleDrawer from "./../../components/PrimaryDraw/ToggleDraw"

const PrimaryDraw = () => {
  const theme = useTheme()
  const below600 = useMediaQuery('(max-width:599px)')
  const [open, setOpen] = useState(!below600)

  useEffect(() => {
    setOpen(!below600)
  }, [below600])

  const hanadelDrawerOpen = ()=>{
    setOpen(true);
  }
    const hanadelDrawerclosed = ()=>{
    setOpen(false);
  }


  return (
    <Drawer
      open={open}
      variant={below600 ? 'temporary' : 'permanent'}
      slotProps={{
        paper: {
          sx: {
            mt: `${theme.primaryAppBar.height}px`,
            height: `calc(100vh - ${theme.primaryAppBar.height}px)`,
            width: `${theme.primaryDrawer.width}px`,
          
          },
        },
      }}
    >
      <Box>
         <Box sx={{
           position:"absolute",
           top:0,
           right:0,
           p:0,
           width: open?'auto':"100%"

         }}>
        <ToggleDrawer/>
        {[...Array(100)].map((_, i) => (
          <Typography key={i} component="p" sx={{ mb: 2 }}>
            {i + 1}
          </Typography>
        ))}
      </Box>
      </Box>
    </Drawer>
  )
}

export default PrimaryDraw
