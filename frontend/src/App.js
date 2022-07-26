
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/HomePage/Home';
import TablesOfWorkSpace from './pages/Home/TablesOfWorkSpace/TablesOfWorkSpace';
import React from "react";
import Login from './components/Account/Login/Login';
import DetailTable from './components/Shared/DetailTable/DetailTable'
import { AuthContextProvider } from './Context/AuthContext';

import WorkSpaceDetail from './pages/WorkSpaceDetail/WorkSpaceDetail';
function App() {
  window.addEventListener('beforeunload', (even) => {
    even.preventDefault();
    window.localStorage.removeItem("token");
  })
  return (
    <div className="App">
      <AuthContextProvider>
        <Routes>
          <Route path="/" element={<Home title="Home" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/tablesofworkspace" element={<TablesOfWorkSpace />} />
          <Route path="/workspacedetail/1" element={<WorkSpaceDetail idSelected= {1} />} />
          <Route path="/workspacedetail/2" element={<WorkSpaceDetail idSelected= {2} />} />
        </Routes>
      </AuthContextProvider>
      {/* <DetailTable></DetailTable> */}
    </div>
  )
}

export default App