import { PropsWithChildren } from "react";
import { Player } from "../../state";
import { Card, CardContent, Typography, styled } from "@mui/material";

interface TurnCardInterface {
    turn: Player | null;
}

const StyledTurnCard = styled(Card)(() => ({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "12em",
    height: "7em",
    borderRadius: 2,
    backgroundColor: "#333",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.4)",
    wordBreak: "break-word",
}))

function TurnCard({ turn }: PropsWithChildren<TurnCardInterface>) {

    return (
        <StyledTurnCard>
            <CardContent>
                <Typography variant="h5">
                    Turn
                </Typography>
                <Typography variant="body1">
                    {
                        turn?.name
                    }
                </Typography>
                <Typography variant="body1">
                    {
                        turn?.symbol
                    }
                </Typography>
            </CardContent>
        </StyledTurnCard>
    )
}

export default TurnCard;