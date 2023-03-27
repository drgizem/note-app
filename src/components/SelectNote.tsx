import {Task,Tag} from "../types"
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";



type Props={
  selected:Task,
}
export const SelectNote=({selected}:Props)=>{
  
  return (<>
    <div className='selected'>
    <h3 className='selected__title'>{selected.title}</h3>
    
    <p className="selected__body">{selected.body}</p>
    <Link to="/"><Button variant="text">Back</Button></Link>
    </div>
    </>)
}