import logo from './logo.svg';
import './App.css';
import StudentLogin from './components/StudentLogin';
import Studentsearch from './components/Studentsearch';
import StudentVeiw from './components/StudentVeiw';
import StudentDelete from './components/StudentDelete';
import StudentForm from './components/StudentForm';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
  <BrowserRouter>
  <Routes>

<Route path="/"exact element={<StudentForm/>}/>
<Route path="/Login"exact element={<StudentLogin/>}/>
<Route path="/Veiw"exact element={<StudentVeiw/>}/>
<Route path="/Search"exact element={<Studentsearch/>}/>
<Route path="/Delete"exact element={<StudentDelete/>}/>




  </Routes>
  
  
  
  </BrowserRouter>
  );
}

export default App;
