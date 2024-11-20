import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Studentlist({students,onDeleteStudent,onEditStudent}) {
    const[editid,seteditid]=useState(null)
    const[editStudent,seteditstudent]=useState({name:'',email:'',age:''})

    const onHandleeditclick=(student)=>{
        seteditid(student.id)
        seteditstudent({name:student.name,email:student.email,age:student.age})

    }

    const handlecancel=()=>{
        seteditstudent({name:'',age:'',email:''})
        seteditid(null)
    }

    const handleSave=()=>{
        oneditStudent(editid,editStudent)
        seteditid(null)
    }


  return (
    <div>
<h2>Students List</h2>
<ul>
    {students.map(student=>(
        <li key={student.id}>
            {editid==student.id} ? (
                <div>
                    <input type='text' value={editStudent.name} onChange={(e)=>seteditstudent({...editStudent,name:e.target.value})}/>
                   <input type='email' value={editStudent.email} onChange={(e)=>seteditstudent({...editStudent,email:e.target.value})}/>
                   <input type='number' value={editStudent.age} onChange={(e)=>seteditstudent({...editStudent,age:e.target.value})}/>
                   <button onClick={handlecancel}>Cancel</button>
                   <button onClick={handleSave}>Save</button>


                </div>
            ):
            {student.name} {student.age} {student.email}
            <div><button onClick={()=>onDeleteStudent(student.id)}>DELETE</button></div>
            <div><button onClick={()=>onHandleeditclick(student)}>Edit</button></div>

        </li>
    ))}
</ul>
    </div>
  )
}

export default Studentlist