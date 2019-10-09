import React, { Component } from 'react'
import { Paper, Typography, Card } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'

const styles = {
  background: {
    backgroundColor: 'rgba(0,0,0,0.4)',
    color: 'white',
    padding: '5%',
    margin: '2%',
    fontSize: '3em'
  },
  card: {
    fontSize: '0.3em',
    height: '40vh',
    width: '20vw',
    padding: '2rem',
    margin: '2rem'
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
        { title: "T-shirt Print" }
      ]
    }
  }

  render() {
    const {classes} = this.props
    return (
      <Paper className={classes.background}>
        <Typography>{this.state.title}</Typography>
        {this.state.categories.map(item => (
          <Card className={classes.card}>{item.title}</Card>
        ))}
      </Paper>
    )
  }
}

export default withStyles(styles)(LandingContainer)