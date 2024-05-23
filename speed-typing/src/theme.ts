import { createTheme } from "@mui/material";

declare module '@mui/material/styles' {
    interface ThemeOptions {    
        themeName?: string  // optional
    }
}

export const theme = createTheme({
    palette: {
        mode: 'dark',
    }, 
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    // width: "150px",
                    // height: "100px",
                    // border: "1px solid red"
                }
            }
        },
        MuiPaper: {
            styleOverrides: {
                root: {
                    padding: 20,
                    width: 380,
                    margin: "20px auto",
                }
            }
        }
    }
});