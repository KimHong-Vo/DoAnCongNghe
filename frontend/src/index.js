import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";
// import TableCreatingPopup from './components/Shared/TableCreatingPopup/TableCreatingPopup';
// import TablesOfWorkSpace from './pages/Home/TablesOfWorkSpace/TablesOfWorkSpace';
// import WorlSpaceCreatingPopup from './components/Shared/WorlSpaceCreatingPopup/WorlSpaceCreatingPopup'

import './App.scss';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
