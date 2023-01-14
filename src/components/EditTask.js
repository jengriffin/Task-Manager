// import {
//   Checkbox,
//   FormControlLabel,
//   TextField,
//   FormGroup,
//   Button
// } from '@material-ui/core'
// import { useState } from 'react'

// const EditTask = ({ onAdd }) => {
//   const [text, setText] = useState('')
//   const [day, setDay] = useState('')
//   const [reminder, setReminder] = useState(false)

//   const onSubmit = (e) => {
//     e.preventDefault()

//   return (
//     <FormGroup>
//       <form onSubmit={onSubmit}>
//         <TextField
//           label={'Add Task'}
//           value={text}
//           onChange={(e) => setText(e.target.value)}
//         />
//         <TextField
//           label={'Day and Time'}
//           value={day}
//           onChange={(e) => setDay(e.target.value)}
//         />

//         <FormControlLabel
//           label="Set Reminder"
//           control={
//             <Checkbox
//               checked={reminder}
//               value={reminder}
//               onChange={(e) => setReminder(e.currentTarget.checked)}
//             />
//           }
//         />
//         <Button color="primary" type="submit">
//           Submit{' '}
//         </Button>
//       </form>
//     </FormGroup>
//   )
// }

// export default EditTask
