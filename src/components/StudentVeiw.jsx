import React, { useEffect, useState } from 'react'
import Header from './Header'
import axios from 'axios'

const apiLink="http://127.0.0.1:8000/api/viewall/"
const StudentVeiw = () => {
    const[veiwStudData,setVeiwData]=useState([])
    useEffect(
        ()=>{
            fetchData()
        }
    )

    const fetchData=()=>{
        axios.get(apiLink).then(
            (response)=>{
                setVeiwData(response.data)
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


                <table class="table">
                  <thead>
                  <tr>
                  <th scope="col">Student Name</th>
                  <th scope="col">Admission Number</th>
                  <th scope="col">Roll Number</th>
                  <th scope="col">Course</th>
                  <th scope="col">User Name</th>
                  <th scope="col">Password</th>
                  </tr>
                  </thead>
                  <tbody>
                    {
                        veiwStudData.map(
                            (value,index)=>{
                                return <tr>
                               
                                <td>{value.studentName}</td>
                                <td>{value.AdmissonNumber}</td>
                                <td>{value.RollNumber}</td>
                                <td>{value.course}</td>
                                <td>{value.userName}</td>
                                <td>{value.Password}</td>
                                
                                </tr>
                            }
                        )

                    }
                  
                  </tbody>
                  </table>
                    

                </div>

                

            </div>
        </div>
    </div>
</div>









    </div>
  )
}

export default StudentVeiw