import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
import {Task,Tag} from "../types"
import { Link } from 'react-router-dom';
import { availableTags } from '../data';
import Select from "react-select";
import makeAnimated from 'react-select/animated';

type Props={
  editTask:Task,
  handleChange(event:any):void
  handleClick(id:string):void
  selectChange(option:any):void,
  editTags:Tag[]
}
const noteComponents = makeAnimated();
export const EditPage=({editTask,handleChange,handleClick,selectChange,editTags}:Props)=>{
  
  return (<>
  <div>
      <div className='note__title'>
      <h2>Edit Note</h2>
      <Link to="/"><Button variant="text">Back</Button></Link>
      </div> 
      <div className='note__inputs'>
       <TextField id="outlined-basic" label="Title" variant="outlined" value={editTask.title} name="title"
          onChange={handleChange}/>
       <Select
      closeMenuOnSelect={false}
      components={noteComponents}
      defaultValue={editTags}
      isMulti
      options={availableTags}
      onChange={selectChange}
      className="note__tags"
    />
       </div>
       <div className='note__body'>
       <TextField
          label="Body"
          multiline
          rows={20}
          value={editTask.body}
          onChange={handleChange}
          name="body"
        />
        <Link to="/"><Button variant="text" onClick={()=>handleClick(editTask.id)}>Edit</Button></Link>
       </div>
    </div>
  </>
  )
}