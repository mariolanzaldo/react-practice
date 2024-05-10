import { Button } from "@mui/material";
import { ReactNode } from "react";

interface TileProps {
    onTileClick: () => void;
    children: ReactNode;
    className: string;
}

function Tile( {children, onTileClick, className }: TileProps) {
    // console.log(className);
    return(
        <Button
            // fullWidth
            onClick={onTileClick}
            className={`${className}`}
        >
        {children}
        </Button>

    );
}

export default Tile;