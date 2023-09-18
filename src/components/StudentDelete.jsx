import React, { useState } from 'react'
import Header from './Header'
import axios from 'axios'

const StudentDelete = () => {

    const[deleteStudent,setDeleteStud]=useState(
        {
            AdmissonNumber:""
        }
    )
    
const readDelete=(Delete)=>{
    setDeleteStud({...deleteStudent,[Delete.target.name]:Delete.target.value})
}

const displayDeleteStud=()=>{
    //console.log(deleteStudent)
    const appLink="http://127.0.0.1:8000/api/delete/"
        axios.post(appLink,deleteStudent).then(
            (response)=>{
                console.log(response.data)
             
            }
        )
}


  return (
    <div>
        <Header/>

<div className="container">
    <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-3">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-XXl-12">
                    <label htmlFor="" className="form_label">Admission Number</label>
                    <input type="text" name="AdmissonNumber" value={deleteStudent.AdmissonNumber} className="form-control" onChange={readDelete} />
                </div>

                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-XXl-12">
                    <button onClick={displayDeleteStud} className="btn btn-warning">Delete</button>
                </div>

            </div>
        </div>
    </div>
</div>


    </div>
  )
}

export default StudentDelete