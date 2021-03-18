import { AppBar, Container, Grid, makeStyles, Toolbar, Typography, useMediaQuery } from '@material-ui/core'
import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { paths } from '../Routes';

function Navbar() {
  const classes = useStyles();
  const currentPath = useLocation().pathname

  const NavItemWrapper = ({ text, path }) => {
    return (
      <Grid item>
        <Link
          className={currentPath === path ? classes.currentPath : classes.navText}
          to={path}>
          <Typography variant='h5'>
            {text}
          </Typography>
        </Link>
      </Grid>
    )
  }

  const matches = useMediaQuery('(max-width:600px)');

  return (
    <AppBar position="static">
      <Toolbar>
        <Container>
          <Grid
            direction={matches ? 'column' : 'row'}
            container spacing={3}>
            <>
              <NavItemWrapper text='Content' path={paths.cms} />
              <NavItemWrapper text='Home' path={paths.home} />
              <NavItemWrapper text='Parallax Canvas' path={paths.parallaxCanvas} />
              {/* <NavItemWrapper text='Crystals Gallery' path={paths.crystalsGallery} /> */}
            </>
          </Grid>
        </Container>
      </Toolbar>
    </AppBar>
  )
}


const useStyles = makeStyles((theme) => ({
  navText: {
    color: '#ccc',
    textDecoration: 'none',
  },
  currentPath: {
    color: 'white',
    textDecoration: 'none',
  }
}));

export default Navbar
