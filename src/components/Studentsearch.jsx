import React, { useState } from 'react'
import Header from './Header'
import axios from 'axios'

const Studentsearch = () => {

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

                        </div>
                    </div>
                </div>
            </div>









        </div>
    )
}

export default Studentsearch