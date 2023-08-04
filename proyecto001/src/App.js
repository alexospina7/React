import logo from './logo.svg';
import './App.css';
import EmployeeListComponent from './components/EmployeeListComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddEmployeeComponent from './components/AddEmployeeComponent';

function App() {
  return (
    <div>
  <BrowserRouter>
      <HeaderComponent/>
      <div class='container'>
        <Routes>
          <Route exact path='/' element={<EmployeeListComponent /> }> </Route>
          <Route path='/employees' element={<EmployeeListComponent /> }> </Route>
          <Route path='/add-employee' element={<AddEmployeeComponent /> }> </Route>
          <Route path='/edit-employee/:id' element={<AddEmployeeComponent /> }> </Route>
        </Routes>
      </div>
      <FooterComponent/>
      </BrowserRouter>
    </div>
  );
}

export default App;
