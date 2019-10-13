import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Link } from 'react-router-dom'
import { AppBar, Toolbar, Typography, Button, IconButton } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}))

const Navigation = () => {
  const classes = useStyles()
  const navList = [
    { title: 'Ghana Design Studio', path: '/' },
    { title: 'About Us', path: '/about' },
    { title: 'Contact Us', path: '/contact' }
  ]

  useEffect(() => {

  }, [])

  return (
    <div className={classes.root}>
      <AppBar position="static" color="inherit">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            <Link to={navList[0].path}>{navList[0].title}</Link>
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Navigation