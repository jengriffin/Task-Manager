import { Paper, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core'
import { Grid } from '@material-ui/core'

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
const Task = () => {
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
          <Typography variant="h5">My Task</Typography>
        </Paper>
      </div>
    </Grid>
  )
}

export default Task
