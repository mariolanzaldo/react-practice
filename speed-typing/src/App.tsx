import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import Signup from './components/Signup';
import Login from './components/Login';
import NotificationBar from './components/NotificationBar';
import Main from './components/Main';
import Stats from './components/Stats';
import TypingTest from './components/TypingTest';

function App() {

  return (
    <>
      <NotificationBar />
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login />}/>
            <Route path="/signup" element={<Signup />}/>
            <Route path="/" element={<Main />}>
              <Route path="stats" element={<Stats />}/>
              <Route path="test" element={<TypingTest />}/>
            </Route>
          </Routes>
          </BrowserRouter>
    </>
  )
}

export default App
