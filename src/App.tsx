import React from 'react';
import {useState} from "react"
import './App.css';
import { Header } from './components/Header';
import {Note} from "./components/Note"
import { EditPage } from './components/EditPage';
import { SelectNote } from './components/SelectNote';
import { Routes,Route, Navigate, Link } from 'react-router-dom';
import {Task,Tag} from "./types"
import uuid from 'react-uuid';

function App() {
  const [note,setNote]=useState<Task>({} as Task)
  const [list,setList]=useState<Task[]>([])
  const [select,setSelect]=useState<Task>({} as Task)
  const [editNote,setEditNote]=useState<Task>({} as Task)
  const [createdTag,setCreatedTag]=useState<Tag>({} as Tag)

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
  console.log(list)
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Header list={list} onDelete={onDelete} handleNote={onNote} handleEdit={onEdit}/>}/>
        <Route path="/new" element={<Note note={note}  handleClick={onClick} handleChange={onChange}/>}/>
        <Route path="/edit" element={<EditPage editTask={editNote}  handleChange={onChange} handleClick={handleEdit}/>}/>
        <Route path={`/${select.id}`} element={<SelectNote selected={select} />}/>
      </Routes>
  </div>
  );
}

export default App
