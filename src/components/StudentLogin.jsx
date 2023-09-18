import React, { useState } from 'react'
import Header from './Header'

const StudentLogin = () => {

    const [NewStudentLogin,SetNewStudentLogin]=useState(
        {

            email:"",
            password:""


        }
    )

    const readLoginData=(login)=>{

        SetNewStudentLogin({...NewStudentLogin,[login.target.name]:login.target.value})

    }

    const displayLoginData=()=>{
        console.log(NewStudentLogin)
    }

  return (
    <div>
        <Header/>

<div className="container">
    <div className="row ">
       
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">



            <div className="row g-3">

                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <label htmlFor="" className="form-label">Email</label>
                <input type="email" name="email" value={NewStudentLogin.email} id="" className="form-control" onChange={readLoginData}/>
                </div>

                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label htmlFor="" className="form-label">Password</label>
                    <input type="password" name="password" value={NewStudentLogin.password} id="" className="form-control" onChange={readLoginData}/>
                </div>

                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <button onClick={displayLoginData} className="btn btn-success">Login</button>
                </div>
            </div>





            </div>



            
        </div>
    </div>
</div>


   
  )
}

export default StudentLogin