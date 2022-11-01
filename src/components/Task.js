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
  reminder: {
    '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(32),
      height: theme.spacing(5),
      backgroundColor: '#3EF0B8',
      padding: theme.spacing(3)
    }
  },
  taskPaperParent: {
    borderRadius: 50,
    display: 'grid',
    gridTemplateColumns: '1fr',
    gridTemplateRows: 'repeat(2, 1fr)',
    '&:hover': {
      background: '#8cb3c0',
      '& $task': {
        opacity: 0.25
      },
      '& $clearButton': {
        color: 'white',
        opacity: 1
      }
    }
  },
  task: {
    borderRadius: 50,
    gridArea: '1 / 1 / 2 / 2'
  },
  hoverButtonTray: {
    borderRadius: 50,
    height: '100%',
    gridArea: '1 / 1 / 2 / 2'
  },
  clearButton: {
    opacity: 0
  }
}))

const Task = ({ task, onDelete, onToggle }) => {
  const classes = useStyles()
  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
    >
      <div
        className={
          classes.root /*`task${
            task.reminder ? classes.reminder : classes.root
          }`*/
        }
      >
        <Paper className={classes.taskPaperParent} elevation={5}>
          <div className={classes.task}>
            <Typography variant="h5">{task.text}</Typography>

            <Typography variant="body1">{task.day}</Typography>
          </div>
          <div className={classes.hoverButtonTray}>
            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
            >
              <Button className={classes.clearButton}>X</Button>
              <Button
                className={classes.clearButton}
                onClick={() => onToggle(task.id)}
              >
                +
              </Button>
              <Button
                className={classes.clearButton}
                onClick={() => onDelete(task.id)}
              >
                O
              </Button>
            </Grid>

            <Button className="clear">X</Button>
          </div>
        </Paper>
      </div>
    </Grid>
  )
}

export default Task
