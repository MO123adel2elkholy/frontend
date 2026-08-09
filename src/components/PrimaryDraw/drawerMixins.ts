import type { Theme } from '@mui/material/styles'

export const openDrawerMixin = (theme: Theme) => ({
  transform: 'translateX(0)',
  opacity: 1,
  transition: theme.transitions.create(['transform', 'opacity'], {
    duration: theme.transitions.duration.standard,
    easing: theme.transitions.easing.sharp,
  }),
})

export const closeDrawerMixin = (theme: Theme) => ({
  transform: 'translateX(-100%)',
  opacity: 0.75,
  transition: theme.transitions.create(['transform', 'opacity'], {
    duration: theme.transitions.duration.standard,
    easing: theme.transitions.easing.sharp,
  }),
})