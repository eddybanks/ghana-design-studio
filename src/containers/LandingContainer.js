import React, { Component } from 'react'
import { Paper, Typography, GridList, GridListTile, GridListTileBar } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import { createMuiTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';

const theme = createMuiTheme({
  palette: {
    primary: { light: 'rgba(255,252,250,0.2)', main: 'rgba(255,252,250,0.5)', dark: 'rgba(255,252,250,0.8)' },
    someColor: { light: 'rgba(0,0,0,0.2)', main: 'rgba(0,0,200,0.5)', dark: 'rgba(0,0,0,0.7)' }
  },
});

const styles = {
  background: {
    backgroundColor: theme.palette.someColor.dark,
    color: 'white',
    padding: '2em',
    margin: '2em',
    fontSize: '3em',
    height: '38vh',
    textAlign: 'center'
  },
  tilebar: {
    height: "20vh",
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden'
  },
  gridList: {
    flexWrap: 'nowrap',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)'
  },
  title: {
    color: theme.palette.primary.dark,
  },
  titleBar: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  }
}

class LandingContainer extends Component {
  constructor() {
    super()

    this.state = {
      title: "Ghana Design Studio",
      categories: [
        { title: "Web Design" },
        { title: "Logo Design" },
        { title: "T-shirt Print" },
        { title: "Hey Hey" }
      ]
    }
  }

  render() {
    const {classes} = this.props
    return (
      <Paper className={classes.background}>
        <Typography variant="h3">{this.state.title}</Typography><hr />
        <GridList className={classes.gridList}>
          {this.state.categories.map(tile => (
            <GridListTile>
              <GridListTileBar title={tile.title} classes={{root: classes.tilebar, title: classes.title}} />
            </GridListTile>
          ))}
        </GridList>
      </Paper>
    )
  }
}

export default withStyles(styles)(LandingContainer)