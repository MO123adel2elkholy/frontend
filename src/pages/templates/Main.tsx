import { Box, Typography } from '@mui/material'
import { useTheme } from '@mui/material/styles'

const Main = () => {
  const theme = useTheme();

  const appBarHeight = theme.primaryAppBar?.height 
  const drawerWidth = theme.scondaryDrawer?.width 
  return (
    <>
    <Box sx={{
        flexGrow:1,
        // width: `${drawerWidth}px`,
        // minWidth: `${drawerWidth}px`,
        mt: `${appBarHeight}px`,
        height: `calc(100vh - ${appBarHeight}px)`,
        borderRight: `1px solid ${theme.palette.divider} `,
        bgcolor: 'background.paper',
        // p: 1,
        boxSizing: 'border-box',
        position: 'absolute',
        top: 0,
        right: 50,
        left:400,
        
        


    }}>
              {Array.from({ length: 5}).map((_, i) => (
                <Typography key={i} component="p" sx={{ py: 1 }}>
                  {i + 1}
                </Typography>
              ))}

    </Box>
    </>
  )
}

export default Main