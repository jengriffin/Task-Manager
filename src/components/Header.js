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

const Header = (props) => {
  const classes = useStyles()

  return (
    <header>
      <Typography variant="h1" className={classes.custom}>
        {props.title}
      </Typography>
      <Buttons
        color={props.showAdd ? 'secondary' : 'primary'}
        text={props.showAdd ? 'Close' : 'Add'}
        onClick={props.onAdd}
      />
    </header>
  )
}
Header.defaultProps = {
  title: 'Task Master'
}

export default Header
