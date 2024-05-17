export const isGameEnded = function (boardToCheck: (string|null)[]) {
    return boardToCheck.every((tile) => tile !== null);
};