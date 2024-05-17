import { Button, Typography } from "@mui/material";
import { PropsWithChildren, ReactNode } from "react";

interface TileProps {
    onTileClick: () => void;
    children: ReactNode;
}

function Tile( {children, onTileClick }: PropsWithChildren<TileProps>) {

    return(
        <Button
            fullWidth
            onClick={onTileClick}
        >
            <Typography
                variant="h2"
            >
                {children}
            </Typography>
        </Button>

    );
}

export default Tile;