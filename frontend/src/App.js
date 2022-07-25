
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/HomePage/Home';
import TablesOfWorkSpace from './pages/Home/TablesOfWorkSpace/TablesOfWorkSpace';
import React from "react";
import Login from './components/Account/Login/Login';
import DetailTable from './components/Shared/DetailTable/DetailTable'
function App() {
  return (
    <div className="App">
      {/* <Routes>
        <Route path="/" element={<Home title="Home" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/tablesofworkspace" element={<TablesOfWorkSpace />} />
      </Routes> */}
      <DetailTable></DetailTable>
    </div>
  )
}

export default App