import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import Signup from './components/Signup';
import Login from './components/Login';
import NotificationBar from './components/NotificationBar';
import Main from './components/Main';
import Stats from './components/Stats';
import TypingTest from './components/TypingTest';
import { Box } from '@mui/material';
import Profile from './components/Profile';

function App() {

  return (
    <Box
      sx={{
        width: "100vw",
        margin: 0,
        marginLeft: -1,
        padding: 0,
        // border: "1px solid yellow"
      }}
    >
      <NotificationBar />
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login />}/>
            <Route path="/signup" element={<Signup />}/>
            <Route path="/" element={<Main />}>
              <Route path="stats" element={<Stats />}/>
              <Route path="test" element={<TypingTest />}/>
              <Route path="profile" element={<Profile />}/>
            </Route>
          </Routes>
          </BrowserRouter>
    </Box>
  )
}

export default App
