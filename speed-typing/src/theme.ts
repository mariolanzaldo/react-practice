import { createTheme } from "@mui/material";

declare module '@mui/material/styles' {
    interface ThemeOptions {    
        themeName?: string  // optional
    }
}

declare module '@mui/material/Typography' {
    interface TypographyPropsVariantOverrides {
      test: true;
    }
  }

  declare module '@mui/material/Paper' {
    interface PaperPropsVariantOverrides {
        typingText: true;
    }
  }

  declare module '@mui/material/TextField' {
    interface TextFieldPropsVariantOverrides {
        hidden: true;
    }
}

declare module '@mui/material/Button' {
    interface ButtonPropsVariantOverrides {
        rounded: true;
    }
}


//   interface TypographyVariantsOptions {
//     test?: React.CSSProperties;
//   }

export const theme = createTheme({
    palette: {
        mode: 'dark',
        text: {
            primary: '#ffffff' 
        }
    },
    typography: {
        allVariants: {
            color: '#ffffff'
        }
    }, 
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    // width: "150px",
                    // height: "100px",
                    // border: "1px solid red"
                }
            },
            variants: [
                {
                    props: { variant: "rounded" },
                    style: {
                        borderRadius: '100%',
                        width: 10,
                        height: 55,
                        border: "1px solid #dd33fa"
                    }
                }
            ],
        },
        // MuiIconButton: {
        //     variants: [
        //         {
        //             props: { variant: "small" },
        //             style: {
        //                 border: "1px solid #dd33fa"
        //             }
        //         }
        //     ]
        // },
        MuiTextField: {
            variants: [
                {
                    props: { variant: "standard" },
                    style: {
                        opacity: 0,
                    }
                }
            ]
        },
        // MuiTypography: {
        //     variants: [
        //         {
        //             props: {variant: 'test'},
        //             style: {
        //                 color: 'white',
        //                 fontWeight: 500,
        //                 // fontFamily: "fantasy",
        //                 fontFamily: "monospace",
        //             }
        //         }
        //     ]
        // },
        MuiPaper: {
            styleOverrides: {
                root: {
                    padding: 20,
                    width: 380,
                    margin: "20px auto",
                }
            },

            variants: [
                {
                    props: {variant: "outlined"},
                    style: {
                        width: "20px",
                    }
                }
            ]
        },
        MuiAlert: {
            styleOverrides: {
                root: {
                        position: "absolute",
                        top: '0%',
                        left: "60%",
                        width: "40%",
                        // backgroundColor: "#ffcccb",
                        boxSizing: "border-box",
                        zIndex: 999,
                }
            }
        }
    }
});