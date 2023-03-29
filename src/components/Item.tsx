import {Task,Tag} from "../types"
import Button from '@mui/material/Button';

type Props={
  task:Task,
  handleDelete(title:string):void
  handleClick(id:string):void
  handleEdit(id:string):void,
  selectedTags:Tag[]
}
export const Item=({task,handleDelete,handleClick,handleEdit,selectedTags}:Props)=>{

  return (
    <div className="item">
      <div onClick={()=>handleClick(task.id)}>
      <h4>{task.title}</h4>
      <div className="item__tags">{selectedTags.map((tag)=>{
      return <p>{tag.label}</p>})}</div>
      </div>
      <div className="item__btn">
      <Button variant="outlined" onClick={()=>handleDelete(task.id)}>Delete</Button>
      <Button variant="outlined" onClick={()=>handleEdit(task.id)}>Edit</Button>
      </div>
    </div>
  )
}