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
      <div className="form-control">
        <label> Day and Time</label>
        <input type="text" placeholder="Add Day and Time"></input>
      </div>
      <div className="form-control">
        <label> Set Reminder</label>

        <Checkbox />
      </div>
    </FormGroup>
  )
}

export default AddTask
