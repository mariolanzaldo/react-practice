import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import Signup from './components/Signup';
import Login from './components/Login';
import { Box } from '@mui/material';
import NotificationBar from './components/NotificationBar';

function App() {

  return (
    <Box>
      <NotificationBar />
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login />}/>
            <Route path="/signup" element={<Signup />}/>
            <Route path="/" element={<h1 style={{color: "white"}}>MAIN APP</h1>}/>
          </Routes>
          </BrowserRouter>
    </Box>
  )
}

export default App
