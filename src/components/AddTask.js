import {
  Checkbox,
  FormControlLabel,
  TextField,
  FormGroup,
  Typography
} from '@material-ui/core'

const AddTask = () => {
  return (
    <FormGroup>
      <TextField label={'Add Task'} />
      <TextField label={'Day and Time'} />
      <label> Set Reminder</label>
      <FormControlLabel label="Set Reminder" control={<Checkbox />} />
    </FormGroup>
  )
}

export default AddTask
