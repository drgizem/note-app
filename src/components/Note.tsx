import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {Task,Tag} from "../types"
import { Link } from 'react-router-dom';
import { availableTags } from '../data';
import Select from "react-select";
import makeAnimated from 'react-select/animated';


type Props={
  note:Task,
  handleClick():void,
  handleChange(event:any):void
  selectChange(option:any):void,
  noTag:Tag[]
}
const noteComponents = makeAnimated();
export const Note=({note,handleClick,handleChange, selectChange,noTag}:Props)=>{
 
  
  return (<>
  <div>
      <div className='note__title'>
      <h2>New Note</h2>
      <Link to="..">
      <Button variant="text">Back</Button>
      </Link>
      </div> 
      <div className='note__inputs'>
       <TextField label="Title" variant="outlined" value={note.title} name="title"
          onChange={handleChange}/>
      <Select
      closeMenuOnSelect={false}
      components={noteComponents}
      defaultValue={noTag}
      isMulti
      options={availableTags}
      onChange={selectChange}
      className="note__tags"
      placeholder="Tags"
    />
       </div>
       <div className='note__body'>
       <TextField
          label="Body"
          multiline
          rows={20}
          value={note.body}
          onChange={handleChange}
          name="body"
        />
        <Link to="/">
        <Button variant="text" onClick={handleClick}>Save</Button>
        </Link>
       </div>
    </div>
  </>
  )
}