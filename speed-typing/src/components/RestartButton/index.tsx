import { Button, IconButton } from "@mui/material";
import RefreshIcon from '@mui/icons-material/Refresh';
import { useRef } from "react";

interface RestartButtonProps {
    onRestart: () => void;
}

function RestartButton({onRestart}: RestartButtonProps) {

    const buttonRef = useRef<HTMLButtonElement>(null);
    const handleClick = () => {
        buttonRef.current?.blur();
        onRestart();
    }
    return(
        <Button
            ref={buttonRef}
            onClick={handleClick}
            variant="outlined"
            color="secondary"
        >
            <IconButton
                color="secondary"
            >
                <RefreshIcon />
            </IconButton>

        </Button>
    );
}


export default RestartButton;