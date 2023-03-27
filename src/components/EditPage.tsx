import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
import {Task,Tag} from "../types"
import { Navigate,Link } from 'react-router-dom';
import CreatableReactSelect from "react-select/creatable"
import { availableTags } from '../data';
import uuid from 'react-uuid';

type Props={
  editTask:Task,
  handleChange(event:any):void
  handleClick(id:string):void
}
export const EditPage=({editTask,handleChange,handleClick}:Props)=>{
  const [mainPage,setMainPage]=useState<boolean>(false)
  const [tags,setTags]=useState<Tag[]>([])

  
  const onClick=()=>{
    setMainPage(true)
  }
  return (<>
  {mainPage ? <Navigate to="/"/> : <div>
      <div className='note__title'>
      <h2>Edit Note</h2>
      <Link to="/"><Button variant="text">Back</Button></Link>
      </div> 
      <div className='note__inputs'>
       <TextField id="outlined-basic" label="Title" variant="outlined" value={editTask.title} name="title"
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
          onChange={tags=>{
            setTags(tags.map((tag)=>{
              return {label:tag.label,id:tag.value}
            }))
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
          value={editTask.body}
          onChange={handleChange}
          name="body"
        />
        <Link to="/"><Button variant="text" onClick={()=>handleClick(editTask.id)}>Edit</Button></Link>
       </div>
    </div>}
  </>
  )
}