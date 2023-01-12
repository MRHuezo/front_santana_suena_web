import { Divider, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

const TopNavAdmin = ({title = "Santana Suena"}) => {
  return (
    <Box mb={2}>
        <Typography variant="h6">
            {title}
        </Typography>
        <Divider />
    </Box>
  )
}

export default TopNavAdmin