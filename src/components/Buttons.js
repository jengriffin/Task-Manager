import { Button } from '@material-ui/core'

const Buttons = ({ color, text, onClick }) => {
  return (
    <Button variant="contained" color={color} onClick={onClick}>
      {text}
    </Button>
  )
}

export default Buttons
