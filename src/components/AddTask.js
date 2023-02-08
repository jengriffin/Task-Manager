import {
  Checkbox,
  FormControlLabel,
  TextField,
  FormGroup,
  Button
} from '@material-ui/core'
import { useState } from 'react'
import csrftoken from '../csrftoken'
import {BASE_URL} from "../globals";
import {useParams} from "react-router-dom";
import {BaseURL} from '/globals'
import axios from "axios";

const AddTask = ({ onAdd }) => {
  // const [text, setText] = useState('')
  // const [day, setDay] = useState('')
  // const [reminder, setReminder] = useState(false)
  const initalState={
      text:'',
      day:'',
        reminder: false
  }
const[formState, setFormState]=useState(initalState)
  let{id}= useParams()
  const handleChange = (event) => {
    setFormState({ ...formState, [event.target.id]: event.target.value })
  }
  const onSubmit = async(e) => {
    e.preventDefault()

    if (!text) {
      alert('Please add a task')
      return
    }
    await axios({
      url: `${BASE_URL}/${id}`,
      method: 'PUT',
      data: formState,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'X-CSRFToken': csrftoken,
        'X-Requested-With': 'XMLHttpRequest',
      },
    })
    setFormState(initalState)
  }
    // onAdd({ text, day, reminder })

    // setText('')
    // setDay('')
    // setReminder(false)

  return (
    <FormGroup>
      <form onSubmit={onSubmit}>
        <TextField
          label={'Add Task'}
          value={formState.text}
          onChange={handleChange}
        />
        <TextField
          label={'Day and Time'}
          value={formState.day}
          onChange={handleChange}
        />

        <FormControlLabel
          label="Set Reminder"
          control={
            <Checkbox
              checked={reminder}
              value={formState.reminder}
              onChange={handleChange}
            />
          }
        />
        <Button color="primary" type="submit">
          Submit{' '}
        </Button>
      </form>
    </FormGroup>
  )

}

export default AddTask
