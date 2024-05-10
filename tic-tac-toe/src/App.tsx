import { ThemeProvider, createTheme } from '@mui/material'
import './App.css'
import TicTacToe from './component/TicTacToe'

const theme = createTheme({
  palette: {
    mode: 'dark'
  }
})

function App() {

  return (

    <ThemeProvider theme={theme}>

      <TicTacToe />
    </ThemeProvider>
  )
}

export default App
