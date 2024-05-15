import { Button } from "@mui/material";
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
        {children}
        </Button>

    );
}

export default Tile;