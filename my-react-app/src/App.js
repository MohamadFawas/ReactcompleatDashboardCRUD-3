
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Nabar from './layout/Nabar';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css';
import Home from './pages/Home';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AddUser from './users/AddUser';
import ViewUser from './users/ViewUser';
import Delete from './users/Delete';
import EditUser from './users/EditUser';
import SideNavebar from './layout/SideNavebar';
import Dashboard from './pages/Dashboard';
import CSVfile from './users/CSVfile';

// import ViewUser from './users/ViewUser';
function App() {
  return (
    <div>
        

      <Router>
      
      <Nabar/>
      
      
      <div className='container-fluid bg-dark bg-secondary min-vh-100'>
          <div className='row'>
            <div className='col-2 bg-white vh-100'>
            <SideNavebar/>
            </div>
            <div className='col-auto '>
              
              
      <Routes>
      <Route exact path="/dashboard" element={<Dashboard/>}/>
        <Route exact path="/home" element={<Home/>}/>
        <Route exact path="/addUser" element={<AddUser/>}/>
        <Route exact path="/viewUser/:id" element={<ViewUser/>}/>
        <Route exact path="/delete/:id" element={<Delete/>}/>
        <Route exact path="/editUser/:id" element={<EditUser/>}/>
        <Route exact path="/file" element={<CSVfile/>}/>
      </Routes>

            </div>

          </div>

        </div>

      </Router>
      
    </div>
  );
}


export default App;
