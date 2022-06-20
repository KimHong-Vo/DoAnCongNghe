
import Menu from './components/Shared/Menu/Menu';
import './App.scss';
import NavigationBar from './components/Shared/NavigationBar/NavigationBar';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home/HomePage/Home';
import TableList from './pages/Home/TableList/TableList';
import TablesOfWorkSpace from './pages/Home/TablesOfWorkSpace/TablesOfWorkSpace';
import CardDetailPopup from './components/Shared/CardDetailPopup/CardDetailPopup';
import React, { useState } from "react";
function App() {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <div className="App">
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tablelist" element={<TableList />} />
        <Route path="/tablesofworkspace" element={<TablesOfWorkSpace />} />
      </Routes>
      <CardDetailPopup/>
      {/* <button
        className="openModalBtn"
        onClick={() => {
          setModalOpen(true);
        }}
      >
        Open
      </button>

      {modalOpen && <CardDetailPopup setOpenModal={setModalOpen} />} */}
    </div>
  )
}

export default App