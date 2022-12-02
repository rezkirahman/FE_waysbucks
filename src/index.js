import React from 'react';
import ReactDOM from 'react-dom/client';
import { UserContextProvider } from './context/UserContext';
import App from './App';
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter as Router } from 'react-router-dom';
//import reportWebVitals from './reportWebVitals';

import Favicon from "./assets/image/logo.png"
const favicon = document.getElementById('idFavicon');
favicon.setAttribute('href', Favicon);

const client = new QueryClient();
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UserContextProvider>
      <QueryClientProvider client={client}>
        <Router>
          <App />
        </Router>
      </QueryClientProvider>
    </UserContextProvider>
  </React.StrictMode>,
);