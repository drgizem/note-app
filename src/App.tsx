import React from 'react';
import {useState} from "react"
import './App.css';
import { Header } from './components/Header';
import {Note} from "./components/Note"
import { EditPage } from './components/EditPage';
import { SelectNote } from './components/SelectNote';
import { Routes,Route } from 'react-router-dom';
import {Task} from "./types"
import uuid from 'react-uuid';

function App() {
  const [note,setNote]=useState<Task>({} as Task)
  const [list,setList]=useState<Task[]>([])
  const [select,setSelect]=useState<Task>({} as Task)
  const [editNote,setEditNote]=useState<Task>({} as Task)


  const selectChange=(option:any)=>{
    setNote((note)=> {return {...note,tags:option}})
    setEditNote((note)=> {return {...note,tags:option}})
  }

  const onChange=(event:any)=>{
    const {name,value}=event.target
    setNote((preV)=>{
      return {...preV,[name]:value}
    })
    setEditNote((preV)=>{
      return {...preV,[name]:value}
    })
  }
  const onClick=()=>{
    const newNote={title:note.title,tags:note.tags,body:note.body,id:note.id}
    if(newNote.title  !== ""){
      setList([...list,newNote])
    }
    setNote({
    title:"",
    tags:[],
    body:"",
    id:uuid() 
    })
  }
  const onEdit=(id:string):void=>{
    const edited=list.find((item)=>{
      return item.id===id
    })
    setEditNote(edited!)
    
  }
  const handleEdit=(id:string):void=>{
    list[list.findIndex((item)=>item.id===editNote.id)]=editNote
    setList((pre)=>{
      return [...pre]
    })
  }
  const onNote=(id:string)=>{
    const selected=list.find((item)=>{
      return item.id===id
    })
    setSelect(selected!)
  }
  const onDelete=(id:string)=>{
    setList(list.filter((item)=>{
      return item.id !== id }))
  }

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Header list={list}  onDelete={onDelete} handleNote={onNote} handleEdit={onEdit}/>}/>
        <Route path="/new" element={<Note note={note} handleClick={onClick} handleChange={onChange} noTag={note.tags} selectChange={selectChange} />}/>
        <Route path="/edit" element={<EditPage selectChange={selectChange} editTask={editNote} editTags={editNote.tags} handleChange={onChange} handleClick={handleEdit}/>}/>
        <Route path={`/${select.id}`} element={<SelectNote selectedTags={select.tags} selected={select} />}/>
      </Routes>
  </div>
  );
}

export default App
