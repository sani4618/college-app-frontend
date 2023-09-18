import React, { useState } from 'react'
import Header from './Header'
import axios from 'axios'

const StudentForm = () => {

    const[newStudForm,setnewStudForm]=useState(
        {

            studentName:"",
            AdmissonNumber:"",
            RollNumber:"",
            course:"",
            userName:"",
            Password:""

        }
    )


        const readData=(eventt)=>{

            setnewStudForm({...newStudForm,[eventt.target.name]:eventt.target.value})


        }

        const displayStudentData=()=>{

            console.log(newStudForm)

            const appUrl="http://127.0.0.1:8000/api/addstud/"
            

        axios.post(appUrl,newStudForm).then(
            (response)=>{
                console.log(response.data)
                if(response.data.status=="added success")
                {
                    alert("successfully added")
                    setnewStudForm({
                        

                        studentName:"",
                        AdmissonNumber:"",
                        RollNumber:"",
                        course:"",
                        userName:"",
                        Password:""
            
                    })
                }
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
                    <label htmlFor="" className="form_label">Student Name</label>
                    <input type="text" name="studentName" value={newStudForm.studentName} className="form-control" onChange={readData}/>
                </div>

                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-XXl-12">
                    <label htmlFor="" className="form-label">Admission Number</label>
                    <input type="text" name="AdmissonNumber" value={newStudForm.AdmissonNumber} className="form-control" onChange={readData} />
                </div>

                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-XXl-12">
                    <label htmlFor="" className="form_label">Roll Number</label>
                    <input type="text" name="RollNumber" value={newStudForm.RollNumber} className="form-control" onChange={readData}/>
                </div>

                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-XXl-12">
                    <label htmlFor="" className="form-label">Course</label>
                    <input type="text" name="course" value={newStudForm.course} className="form-control" onChange={readData} />
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-XXl-12">
                    <label htmlFor="" className="form_label">User Name</label>
                    <input type="text" name="userName" value={newStudForm.userName} className="form-control" onChange={readData} />
                </div>

                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-XXl-12">
                    <label htmlFor="" className="form-label">Password</label>
                   <input type="password" name="Password" value={newStudForm.Password} id="" className="form-control" onChange={readData} />
                </div>

                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-XXl-12">
                    <button onClick={displayStudentData} className="btn btn-primary">Add</button>
                </div>

            </div>
        </div>
    </div>
</div>







    </div>
  )
}

export default StudentForm