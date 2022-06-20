
import Menu from './components/Shared/Menu/Menu';
import './App.scss';
import { Routes, Route} from 'react-router-dom';
import Home from './pages/Home/HomePage/Home';
import TableList from './pages/Home/TableList/TableList';
import TablesOfWorkSpace from './pages/Home/TablesOfWorkSpace/TablesOfWorkSpace';
import React from "react";
import Login from './components/Account/Login/Login';
function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route path="/home" element={<Home title= "Home" />}  />
        <Route path="/login" element={<Login />} />
        <Route path="/tablesofworkspace" element={<TablesOfWorkSpace />} />
      </Routes>
      
    </div>
  )
}

export default App