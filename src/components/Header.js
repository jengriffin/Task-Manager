import { Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core'
import Buttons from './Buttons'
const useStyles = makeStyles({
  custom: {
    color: '#0a2771',
    fontWeight: 'bold',
    fontFamily: 'Dancing Script'
  }
})

const Header = (props, { showAdd, onAdd }) => {
  const classes = useStyles()

  return (
    <header>
      <Typography variant="h1" className={classes.custom}>
        {props.title}
      </Typography>
      <Buttons
        color={showAdd ? 'primary' : 'secondary'}
        text={showAdd ? 'Close' : 'Add'}
        onClick={onAdd}
      />
      <Buttons color="secondary" text="No" />
      <Buttons color="primary" text="Yes" />
    </header>
  )
}
Header.defaultProps = {
  title: 'Task Master'
}

export default Header
