import Button from '@mui/material/Button';
import {useState} from "react"
import {Task} from "../types"
import { Item } from "./Item"
import { Navigate } from 'react-router-dom';

type Props={
  list:Task[],
  onDelete:(id:string)=>void,
  handleNote(id:string):void,
  handleEdit:(id:string)=>void
}

export const Header=({list,onDelete,handleNote,handleEdit}:Props)=>{
const [newTask,setNewTask]=useState<boolean>(false)
const [edit,setEdit]=useState<boolean>(false)
const [detail,setDetail]=useState<boolean>(false)
const [select,setSelect]=useState<Task>({} as Task)

const handleClick=()=>{
setNewTask(true)
}
const onNote=(id:string)=>{
  setDetail(true)
  handleNote(id)
  const selected=list.find((item)=>{
    return item.id===id
  })
  setSelect(selected!)
}
const onEdit=(id:string):void=>{
  handleEdit(id)
  setEdit(true)
}

  return(<>
  {edit && <Navigate to="/edit"/>}
  {newTask ? <Navigate to="/new"/> :
  <div className='header'>
  <h1>Notes</h1>
  <Button variant="contained" onClick={handleClick}>Create</Button>
</div>}
<div className='list'>
  {detail && <Navigate to={`/${select.id}`}/>}
{list.map((item:Task,key:number)=>{
  return (
    <Item task={item} handleClick={onNote} handleDelete={onDelete} handleEdit={onEdit} selectedTags={item.tags}/>
  )
})}
</div>
  </>
  )
}