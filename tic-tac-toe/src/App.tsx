import { ThemeProvider, createTheme } from '@mui/material'
import './App.css'
import TicTacToe from './component/TicTacToe';
import { useAppContext } from './state';
import Settings from './component/Settings';

declare module '@mui/material/Button' {
  interface Grid2PropsVariantOverrides {
    tile: true;
  }
}


const theme = createTheme({
  palette: {
    mode: 'dark'
  },
  components: {
    MuiGrid: {
      styleOverrides: {
        container: {
          justifyContent: "center",
          alignItems: "center",
        },
        item: {
        }, 
        
      },
      variants: [
        {
          props: { border: `dotted`},
          style: {
            border: `4px solid purple`
          }
        }
      ]
    },
    MuiButton: {
      styleOverrides: {
        root: {
          width: "100px",
          height: "100px",
        },
      },
    },
  },
})

function App() {
  const [state ] = useAppContext();
  const { currentPage } = state;

  return (

    <ThemeProvider theme={theme}>

      {
        currentPage === "newGame" ? (
          <Settings />
        ) : null
      }

      {
        currentPage === "board" ? (
          <TicTacToe />
        ) : null
      }

      {/* <TicTacToe /> */}
    </ThemeProvider>
  )
}

export default App
