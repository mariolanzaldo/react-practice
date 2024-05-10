import { Box, Grid, ThemeProvider, createTheme } from "@mui/material";
import Tile from "./Tile";
import styles from "./style.module.css";
// import Row from "./Row";

interface BoardProps {
    // children?: ReactNode;

    onTileClick: (index: number) => void;
    tiles: (string | null) []
}

const theme = createTheme({
    components: {
      MuiGrid: {
        styleOverrides: {
          container: {
            justifyContent: "center",
            alignItems: "center",
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            width: "100px",
            height: "100px",
            // borderRight: "0.2em solid #0074a6",

          },
        //   rightBorder: {
        //     borderRight: "0.2em solid #0074a6",
        
        //     },
        //     bottomBorder: {
        //     borderBottom: "0.2em solid #0074a6",
        //     }
        },
      },
    },
  });

function Board({tiles, onTileClick }:  BoardProps) {
    return(
        //TODO: Replace this with variants
        <ThemeProvider theme={theme}>
            <Box
            sx={{
                flexGrow: 1
            }}
        >
            <Grid
                container
            >
                <Grid container item spacing={9}>
                    <Grid 
                        item xs={1} 
                        // className={`${styles.bottomBorder} ${styles.rightBorder}`}
                    >
                        <Tile
                            children={tiles[0]}
                            onTileClick={() => onTileClick(1)}
                            className={`${styles.bottomBorder} ${styles.rightBorder}`}
                            // className={}

                        />
                </Grid>

                <Grid 
                    item xs={1}
                >
                    <Tile
                        className={`${styles.bottomBorder} ${styles.rightBorder}`}
                        children={tiles[1]}
                        onTileClick={() => onTileClick(2)}
                    />   
                </Grid>
                <Grid 
                    item xs={1}
                >
                    <Tile
                        className={`${styles.bottomBorder}`}
                        children={tiles[2]}
                        onTileClick={() => onTileClick(3)}
                    />  
                </Grid>
                </Grid>
                

                <Grid container item spacing={9}>
                    <Grid 
                        item xs={1}
                    >
                        <Tile
                            className={`${styles.bottomBorder} ${styles.rightBorder}`}
                            children={tiles[3]}
                            onTileClick={() => onTileClick(4)}
                        />
                </Grid>

                <Grid 
                    item xs={1}
                >
                    <Tile
                        className={`${styles.bottomBorder} ${styles.rightBorder}`}
                        children={tiles[4]}
                        onTileClick={() => onTileClick(5)}
                    />   
                </Grid>
                <Grid
                    item xs={1}
                >
                    <Tile
                        className={`${styles.bottomBorder}`}
                        children={tiles[5]}
                        onTileClick={() => onTileClick(6)}
                    />  
                </Grid>
                </Grid>

                <Grid container item spacing={9}>
                    <Grid 
                        item xs={1}
                    >
                        <Tile
                            className={`${styles.rightBorder}`}
                            children={tiles[6]}
                            onTileClick={() => onTileClick(7)}
                        />
                </Grid>

                <Grid 
                    item xs={1}                    
                >
                    <Tile
                        className={`${styles.rightBorder}`}
                        children={tiles[7]}
                        onTileClick={() => onTileClick(8)}
                    />   
                </Grid>
                <Grid item xs={1}>
                    <Tile
                        className=""
                        children={tiles[8]}
                        onTileClick={() => onTileClick(9)}
                    />  
                </Grid>
                </Grid>
            </Grid>
        </Box>

        </ThemeProvider>
        
    )
}

export default Board;