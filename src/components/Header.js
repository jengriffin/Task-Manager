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
  const onClick = () => {
    console.log('click')
  }
  return (
    <header>
      <Typography variant="h1" className={classes.custom}>
        {props.title}
      </Typography>
      <Buttons color="primary" text="Add" onClick={onClick} />
      <Buttons color="secondary" text="No" />
      <Buttons color="primary" text="Yes" />
    </header>
  )
}
Header.defaultProps = {
  title: 'Task Master'
}

export default Header
