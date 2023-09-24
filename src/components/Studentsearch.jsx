import React, { useState } from 'react'
import Header from './Header'
import axios from 'axios'
     
const Studentsearch = () => {
    const [data, setData] = useState([
        {
          "studentName": "sani",
          "AdmissonNumber": 123,
          "RollNumber": 33216,
          "course": "MCA",
          "userName": "sani123",
          "Password": "sani8996"
        },
        {
          "studentName": "joseph",
          "AdmissonNumber": 24345,
          "RollNumber": 656575,
          "course": "MBA",
          "userName": "jose123",
          "Password": "jose1234"
        },
        {
          "studentName": "leena",
          "AdmissonNumber": 24345,
          "RollNumber": 656575,
          "course": "MBA",
          "userName": "lena123",
          "Password": "lena1234"
        },
        {
          "studentName": "georgy",
          "AdmissonNumber": 5465676,
          "RollNumber": 88765,
          "course": "MBA",
          "userName": "lena123",
          "Password": "lena1234"
        },
        {
          "studentName": "jomon",
          "AdmissonNumber": 2435,
          "RollNumber": 766454,
          "course": "bca",
          "userName": "jomon123",
          "Password": "jo1234"
        },
        {
          "studentName": "luca",
          "AdmissonNumber": 3432,
          "RollNumber": 102,
          "course": "BBA",
          "userName": "luca123",
          "Password": "luca@1345"
        }
      ])
    const [NewSearch, SetNewSearch] = useState(
        {
  
            AdmissonNumber:""

        }
    )

    const ReadNewSearch = (search) => {

        SetNewSearch({ ...NewSearch, [search.target.name]: search.target.value }) 

    }

    const DisplayNewSearchData = () => {
        // console.log(NewSearch)
        const appLink="http://127.0.0.1:8000/api/search/"
        axios.post(appLink,NewSearch).then(
            (response)=>{
                console.log(response.data)
                setData(response.data)             
            }
        )
    }

    return (
        <div>

            <Header />

            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-XXl-12">
                                <label htmlFor="" className="form_label">Admission Number</label>
                                <input type="text" name="AdmissonNumber" value={NewSearch.AdmissonNumber} className="form-control" onChange={ReadNewSearch} />
                            </div>

                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-XXl-12">
                                <button onClick={DisplayNewSearchData} className="btn btn-primary">Search</button>
                            </div>

                            {data.map(
                            (value, index) => {
                                return <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-XXl-12">
                                    <div class="card">
                                                <div class="card-body">
                                                <h5 class="card-title">Student Name={value.studentName}</h5>
                                                <p class="card-text">Admission Number={value.AdmissonNumber}</p>
                                                <p class="card-text">Boardband Plan={value.RollNumber}</p>
                                                <p class="card-text">Mobile Number{value.course}</p>s
                                                <p class="card-text">Subscription Date={value.userName}</p>
                                                <p class="card-text">Next Subscription date={value.Password}</p>
                                                
                                                
                                            </div>
                                    </div>
                                </div>
                            }
                        )}

                        </div>
                    </div>
                </div>
            </div>









        </div>
    )
}

export default Studentsearch