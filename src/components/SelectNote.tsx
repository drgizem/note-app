import {Task,Tag} from "../types"
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";



type Props={
  selected:Task,
  selectedTags:Tag[]
}
export const SelectNote=({selected,selectedTags}:Props)=>{
  
  return (<>
    <div className='selected'>
    <div className="select">
    <h3 className='selected__title'>{selected.title}</h3>
    <Link to="/"><Button className="select__btn" variant="text">Back</Button></Link> 
    </div>
    <div className="item__tags">{selectedTags.map((tag)=>{
      return <p>{tag.label}</p>})}</div>
    <p className="selected__body">{selected.body}</p>
    </div>
    </>)
}