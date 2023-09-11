import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.scss'
import { ThemeProvider } from './features/tCon'

const rootElement = document.getElementById('root');

ReactDOM.createRoot(rootElement).render(
  <ThemeProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  </ThemeProvider>
);
