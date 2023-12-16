import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.tsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import { ThemeProvider } from "@mui/material/styles";
import { FirebaseAppProvider } from 'reactfire';
import 'firebase/auth';



// internal imports
import { Home, Translate, Saved} from './components';
import { Auth } from './components';
import './index.css'
import { theme } from './Theme/themes'; 
import { firebaseConfig } from './firebaseConfig';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <FirebaseAppProvider firebaseConfig={firebaseConfig}>
      <ThemeProvider theme = { theme }> 
        <Router>
          <Routes>
            <Route path='/' element={<Home title = {"Nihongo2go"}/>} />
            <Route path='/auth' element={<Auth title = {"Nihongo2go"}/>} />
            <Route path='/translate' element={<Translate />} />
            <Route path='/saved' element={<Saved />} />
          </Routes>
        </Router>
      </ThemeProvider> 
    </FirebaseAppProvider>
  </React.StrictMode>,
)
