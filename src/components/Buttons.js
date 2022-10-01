import { Button } from '@material-ui/core'

const Buttons = ({ color, text }) => {
  return (
    <Button variant="contained" color={color}>
      {text}
    </Button>
  )
}

export default Buttons
