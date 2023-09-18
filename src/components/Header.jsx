import React from 'react'

const Header = () => {
  
  return (
    <div>

<nav className="navbar navbar-expand-lg bg-Primary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Student App</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Student Form</a>
        </li>

        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/Login">Student Login</a>
        </li>

        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/Search">Student Search</a>
        </li>

        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/Delete">Student Delete</a>
        </li>

        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/Veiw">Student Veiw</a>
        </li>
          </ul>
       
      
    </div>
  </div>
</nav>




    </div>
  )
}

export default Header