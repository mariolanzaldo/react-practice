import { Typography } from "@mui/material";

function Header() {
    return (
        <Typography
            variant='h3'
            align="center"
            color="primary"
            marginBottom={2}
        >
            Tic Tac Toe Game
        </Typography>
    );
}

export default Header;