import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
import {Task,Tag} from "../types"
import { Link } from 'react-router-dom';
import { availableTags } from '../data';
import CreatableReactSelect from "react-select/creatable"
import uuid from 'react-uuid';

type Props={
  note:Task,
  handleClick():void,
  handleChange(event:any):void
}
export const Note=({note,handleClick,handleChange}:Props)=>{
  const [tags,setTags]=useState<Tag[]>([])
  
  return (<>
  <div>
      <div className='note__title'>
      <h2>New Note</h2>
      <Link to="..">
      <Button variant="text">Back</Button>
      </Link>
      </div> 
      <div className='note__inputs'>
       <TextField id="outlined-basic" label="Title" variant="outlined" value={note.title} name="title"
          onChange={handleChange}/>
       <CreatableReactSelect
          onCreateOption={
            label=>{
              const newTag={id:uuid(),label}
              setTags((preTag)=>[...preTag,newTag])
            }
         }
          value={tags.map((tag)=>{
            return {label:tag.label,value:tag.id}
          })}
          onChange={tags => {
            setTags(
              tags.map(tag => {
                return { label: tag.label, id: tag.value }
              })
            )
          }}
          isMulti
          name="tags"
          options={availableTags.map((tag)=>{
            return {label:tag.label,value:tag.id}})}
          className="basic-multi-select"
          classNamePrefix="select"
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
        <Button variant="text" onClick={handleClick}>Save</Button>
       </div>
    </div>
  </>
  )
}