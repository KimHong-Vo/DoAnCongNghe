import React from 'react';
import TableCreatingPopup from './components/Shared/TableCreatingPopup/TableCreatingPopup';
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import ReactDOM from 'react-dom/client';
// import App from './App';
// import WorlSpaceCreatingPopup from './components/Shared/WorlSpaceCreatingPopup/WorlSpaceCreatingPopup';
import TablesOfWorkSpace from './pages/Home/TablesOfWorkSpace/TablesOfWorkSpace';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
    {/* <WorlSpaceCreatingPopup /> */}
    <TablesOfWorkSpace/>
  </React.StrictMode>
);
   
