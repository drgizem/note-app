import {Task,Tag} from "../types"
import Button from '@mui/material/Button';

type Props={
  task:Task,
  handleDelete(title:string):void
  handleClick(id:string):void
  handleEdit(id:string):void
}
export const Item=({task,handleDelete,handleClick,handleEdit}:Props)=>{

  return (
    <div className="item">
      <h4 onClick={()=>handleClick(task.id)}>{task.title}</h4>
      
      <Button variant="outlined" onClick={()=>handleDelete(task.id)}>Delete</Button>
      <Button variant="outlined" onClick={()=>handleEdit(task.id)}>Edit</Button>
    </div>
  )
}