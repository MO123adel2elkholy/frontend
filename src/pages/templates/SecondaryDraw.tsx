import { Box, Typography } from '@mui/material'
import { useTheme } from '@mui/material/styles'

const SecondaryDraw = () => {
  const theme = useTheme()

  const appBarHeight = theme.primaryAppBar?.height 
  const drawerWidth = theme.scondaryDrawer?.width 

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