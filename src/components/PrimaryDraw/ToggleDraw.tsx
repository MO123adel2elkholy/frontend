import ChevronLeft from '@mui/icons-material/ChevronLeft'
import ChevronRight from '@mui/icons-material/ChevronRight'
import { Box, IconButton } from '@mui/material'
import React from 'react'


type Props = {
  open: boolean
  hanadelDrawerOpen: () => void
  hanadelDrawerclosed: () => void

}

const ToggleDrawer: React.FC<Props>= ({ open, hanadelDrawerOpen, hanadelDrawerclosed }) => {
  return (
    <Box
      sx={{
        height: '50px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <IconButton onClick={open ? hanadelDrawerclosed : hanadelDrawerOpen}>
            {open? <ChevronLeft />:<ChevronRight/>}
      </IconButton>
    </Box>
  )
}

export default ToggleDrawer