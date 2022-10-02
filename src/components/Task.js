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
  taskPaperParent: {
    borderRadius: 50,
    display: "grid",
    gridTemplateColumns: '1fr',
    gridTemplateRows: 'repeat(2, 1fr)',
    "&:hover": {
      background: 'rgba(58, 1, 132, 0.7)',
      "& $task": {
        opacity: 0.25
      }
    }
  },
  task: {
    borderRadius: 50,
    gridArea: '1 / 1 / 2 / 2',
  },

  hoverButtonTray: {
    borderRadius: 50,
    gridArea: '1 / 1 / 2 / 2',
    "&:hover": {
      "& $clearButton": {
        color: "blue",
        opacity: 1
      }
    },
  },
  clearButton: {
    opacity: 0
  },
  hoverPaperMask: {
    height: '100%',
    borderRadius: 50,
    opacity: .4,
    backgroundColor: 'rgba(58, 1, 132, 0.44)',
    transition: 'all 0.4s ease-in-out'
  },
  hidePaper: {
    "&:hover": {
      opacity: 0
    }
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
        <Paper className={classes.taskPaperParent} elevation={5}>
          <div className={classes.task}>
            <Typography variant="h5">{task.text}</Typography>
            <Typography variant="p">{task.day}</Typography>
          </div>
          <div className={classes.hoverButtonTray}>
            <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
            >
              <Button className={classes.clearButton}>X</Button>
              <Button className={classes.clearButton}>X</Button>
              <Button className={classes.clearButton}>X</Button>
            </Grid>
          </div>

        </Paper>
      </div>
    </Grid>
  )
}

export default Task
