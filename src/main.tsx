import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App.tsx';
import { Provider as ReduxProvider } from 'react-redux';
import store from './state/store.ts';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ReduxProvider store={store} >
      <Router >
        <App />
      </Router>
    </ReduxProvider>
    
  </React.StrictMode>,
)
