import { Checkbox } from '@material-ui/core'
import FormGroup from '@material-ui/core'
const AddTask = () => {
  return (
    <form className="add-form">
      <div className="form-control">
        <label> Task</label>
        <input type="text" placeholder=" Add Task"></input>
      </div>

      <div className="form-control">
        <label> Day and Time</label>
        <input type="text" placeholder="Add Day and Time"></input>
      </div>

      <div className="form-control">
        <label> Set Reminder</label>

        <Checkbox />
      </div>
    </form>
  )
}

export default AddTask
