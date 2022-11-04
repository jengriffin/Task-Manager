import {
  Checkbox,
  FormControlLabel,
  TextField,
  FormGroup,
  Button
} from '@material-ui/core'

const AddTask = () => {
  return (
    <FormGroup>
      <TextField label={'Add Task'} />
      <TextField label={'Day and Time'} />

      <FormControlLabel label="Set Reminder" control={<Checkbox />} />
      <Button color="primary">Submit </Button>
    </FormGroup>
  )
}

export default AddTask
