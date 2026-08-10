import { Box, Typography } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import axios from 'axios'
import { useEffect, useState } from 'react'
import api from '../../helpers/JetInterceptor'



const SecondaryDraw = () => {
  const theme = useTheme()
  const server_url='http://127.0.0.1:8000/api/server/select/'

  const appBarHeight = theme.primaryAppBar?.height 
  const drawerWidth = theme.scondaryDrawer?.width 

  // axios
  //     .get(server_url)
  //     .then((response)=>{
  //       // console.log(response.data)
  //     })
  //     .catch((errors)=>{
  //       console.log(`your erros is ${errors}`)
  //     })

      const [data, setData] = useState([])

    useEffect(() => {
    api.get('/server/select/')
      .then((res) => {setData(res.data)
              console.log(res.data)
      
      })
      .catch((err) => console.error(err))
        }, [])
      


  return (
    <Box
      sx={{
        width: `${drawerWidth}px`,
        minWidth: `${drawerWidth}px`,
        mt: `${appBarHeight}px`,
        height: `calc(100vh - ${appBarHeight}px)`,
        borderRight: `1px solid ${theme.palette.divider} `,
        // bgcolor: 'background.paper',
        // p: 1,
        boxSizing: 'border-box',
        position: 'absolute',
        top: 0,
        right: 900,
        left:200,
        p: 0,
        overflow:"auto"
      }}
    >
      {Array.from({ length: 20 }).map((_, i) => (
        <Typography key={i} component="p" sx={{ py: 1 }}>
          {i + 1}
        </Typography>
      ))}
    </Box>
  )
}

export default SecondaryDraw