import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Studentform from './components/Studentform'
import Studentlist from './components/Studentlist'
import axios from 'axios'

function App() {
const[students,setstudents]=useState([]) 
const fetchstudents=async()=>{
  try{
      const response=await axios.get('http://127.0.0.1:8000/student/')
      setstudents(response.data)
  }
  catch(error){
      console.error('error',error)

  }

}
const onAdd=(newStudent)=>{
  setstudents([...students,newStudent])
}

const deleteStudent=async (id)=>{
  try{
    const response=await axios.delete(`http://127.0.0.1:8000/student/${id}/delete`)
    if (response.status==200){
      setstudents((students)=>students.filter((student)=>student.id !==id))
    }
  }


  catch(error){
    console.error('error deletestudent',error)
  }
}
const editStudent=async(id,updateStudent)=>{
  trt{
    const response=await axios.put(`$(id/update)`,updateStudent)
    if(response.status==200){
      setstudents{(students)=>students.map((student))=>student.id==id ?{...student,...}}
    }
  }
}
useEffect(()=>{
  fetchstudents()
},[])

  return (
   <div>
    <Studentform onAdd={onAdd}></Studentform>
    <Studentlist students={students} onDeleteStudent={deleteStudent} oneditStudent={editStudent}></Studentlist>
   </div>
  )
}

export default App
