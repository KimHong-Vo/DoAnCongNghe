import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './App';
// import WorlSpaceCreatingPopup from './components/Shared/WorlSpaceCreatingPopup/WorlSpaceCreatingPopup';
import TablesOfWorkSpace from './pages/Home/TablesOfWorkSpace/TablesOfWorkSpace';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <WorlSpaceCreatingPopup /> */}
    <TablesOfWorkSpace/>
  </React.StrictMode>
);
