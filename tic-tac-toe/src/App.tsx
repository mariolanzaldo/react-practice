import { ThemeProvider, createTheme } from '@mui/material'
import './App.css'
import TicTacToe from './component/TicTacToe';
import { useAppContext } from './state';
import Main from './component/Main';
import History from './component/History';

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
    },
    MuiButton: {
      styleOverrides: {
        root: {
          width: "100px",
          height: "100px",
        },
      },
      variants: [
          {
            props: { variant: `contained`},
            style: {
              color: "white",
              fontWeight: "bolder",
              width: "10em",
              height: "5em",
            }
          }
        ]
    },
  },
})

function App() {
  const [state ] = useAppContext();
  const { currentPage } = state;

  return (

    <ThemeProvider theme={theme}>
      {
        currentPage === "main" ? (
          <Main />
        ) : null
      }

      {
        currentPage === "board" ? (
          <TicTacToe />
        ) : null
      }
      {
        currentPage === "stats" ? (
          <History /> 
        ) : null
      }

    </ThemeProvider>
  )
}

export default App
