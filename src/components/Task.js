import { Paper, Typography, Grid, makeStyles } from '@material-ui/core'

import { Button } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(32),
      height: theme.spacing(5),
      backgroundColor: '#B0E0F0',
      padding: theme.spacing(3)
    }
  },
  customBorderRadius: {
    borderRadius: 50
  }
}))

const Task = ({ task }) => {
  const classes = useStyles()
  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
    >
      <div className={classes.root}>
        <Paper className={classes.customBorderRadius} elevation={5}>
          <div className="popup">
            <Typography variant="h5">{task.text}</Typography>
            <Typography variant="p">{task.day}</Typography>
            <Button className="clear">X</Button>
          </div>
        </Paper>
      </div>
    </Grid>
  )
}

export default Task
