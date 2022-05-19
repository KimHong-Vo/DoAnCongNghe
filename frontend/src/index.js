import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import TableCreatingPopup from './components/Shared/TableCreatingPopup/TableCreatingPopup';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <TableCreatingPopup></TableCreatingPopup>
  </React.StrictMode>
);
