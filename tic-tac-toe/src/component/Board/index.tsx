import { Box, Grid } from "@mui/material";
import Tile from "./Tile";

interface BoardProps {
    onTileClick: (index: number) => void;
    tiles: (string | null) []
}


function Board({tiles, onTileClick }:  BoardProps) {
    return(
            <Box
            sx={{
                flexGrow: 1
            }}
        >
            <Grid
                container
                spacing={0}
            >
                <Grid 
                    container 
                    item 
                    spacing={0}
                    >
                    <Grid 
                        item 
                        xs={2}
                        borderRight={2}
                        borderBottom={2}
                    >
                        <Tile
                            onTileClick={() => onTileClick(1)}
                        >
                            {tiles[0]}
                        </Tile>
                    </Grid>

                    <Grid 
                        item 
                        xs={2}
                        borderRight={2}
                        borderBottom={2}
                    >
                        <Tile
                            onTileClick={() => onTileClick(2)}
                        >
                            {tiles[1]}
                        </Tile>   
                    </Grid>
                    <Grid
                        item 
                        xs={2}
                        borderBottom={2}
                    >
                        <Tile
                            onTileClick={() => onTileClick(3)}
                        >
                            {tiles[2]}
                        </Tile>  
                    </Grid>

                </Grid>
                <Grid 
                    container 
                    item 
                    spacing={0}
                    >
                    <Grid 
                        item 
                        xs={2}
                        borderRight={2}
                        borderBottom={2}
                    >
                        <Tile
                            onTileClick={() => onTileClick(4)}
                        >
                            {tiles[3]}
                        </Tile>
                    </Grid>

                    <Grid 
                        item 
                        xs={2}
                        borderRight={2}
                        borderBottom={2}
                    >
                        <Tile
                            onTileClick={() => onTileClick(5)}
                        >
                            {tiles[4]}
                        </Tile>   
                    </Grid>
                    <Grid
                        item 
                        xs={2}
                        borderBottom={2}
                    >
                        <Tile
                            onTileClick={() => onTileClick(6)}
                        >
                            {tiles[5]}
                        </Tile>  
                    </Grid>

                </Grid>

                <Grid 
                    container 
                    item 
                    spacing={0}
                    >
                    <Grid 
                        item xs={2}
                        borderRight={2}
                    >
                        <Tile
                            onTileClick={() => onTileClick(7)}
                        >
                            {tiles[6]}

                        </Tile>
                </Grid>

                <Grid 
                    item 
                    xs={2}
                    borderRight={2}                   
                >
                    <Tile
                        onTileClick={() => onTileClick(8)}
                    >
                        {tiles[7]}
                    </Tile>   
                </Grid>
                <Grid 
                    item 
                    xs={2}
                >
                    <Tile
                        onTileClick={() => onTileClick(9)}
                    >
                        {tiles[8]}
                    </Tile>  
                </Grid>
                </Grid>
            </Grid>
        </Box>
        
    );
}

export default Board;