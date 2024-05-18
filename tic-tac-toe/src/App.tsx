import { ThemeProvider, createTheme } from '@mui/material'
import './App.css'
import TicTacToe from './component/TicTacToe';
import { useAppContext } from './state';
import Main from './component/Main';
import History from './component/History';
import Route from './component/Router';
import { Page, Routes } from './state/reducer';
// import Route from './component/Router';

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
        currentPage === Page.main || window.location.pathname === Routes.main ? (
         <Route path={Routes.main}>
           <Main />
         </Route>
        ) : null
      }

      {
        currentPage === Page.board || window.location.pathname === Routes.board ? (
          
          <Route path={Routes.board}>
            <TicTacToe />
          </Route>
        //   <>
        //   {setRoute("/board")}
        //   <TicTacToe />
        // </>
        ) : null
      }
      {
        currentPage === Page.stats || window.location.pathname === Routes.stats ? (
          
          <Route path={Routes.stats}>
            <History />
          </Route>
          //  <>
          //   {setRoute("/board")}
          // <History />
          //  </>
        ) : null
      }

    </ThemeProvider>
  )
}

export default App
