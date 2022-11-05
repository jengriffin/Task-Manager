import {
  Checkbox,
  FormControlLabel,
  TextField,
  FormGroup,
  Button
} from '@material-ui/core'
import { useState } from 'react'

const AddTask = () => {
  const [text, setText] = useState('')
  const [day, setDay] = useState('')
  const [reminder, setReminder] = useState(false)
  // const[form, setForm]=useState(
  // { text:'',
  //   day:'',
  //   reminder: false}
  // )
  return (
    <FormGroup>
      <TextField
        label={'Add Task'}
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <TextField
        label={'Day and Time'}
        value={day}
        onChange={(e) => setDay(e.target.value)}
      />

      <FormControlLabel
        label="Set Reminder"
        control={
          <Checkbox
            value={reminder}
            onChange={(e) => setReminder(e.currentTarget.checked)}
          />
        }
      />
      <Button color="primary">Submit </Button>
    </FormGroup>
  )
}

export default AddTask
