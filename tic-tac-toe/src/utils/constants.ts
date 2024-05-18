export const WINNER_COMBOS = [
    [0, 1, 2], 
    [3, 4, 5], 
    [6, 7, 8],
    [0, 3, 6], 
    [1, 4, 7], 
    [2, 5, 8], 
    [0, 4, 8], 
    [2, 4, 6] 
];


interface Column {
    id: 'date' | 'winner' | 'symbol' | 'moves' | 'duration';
    label: string;
    minWidth?: number;
    align?: 'right';
    format?: (value: number) => string;
  }
  
  export const columns: readonly Column[] = [
    { 
      id: 'date', 
      label: 'Date', 
      minWidth: 80 
  },
    { 
      id: 'winner', 
      label: 'Winner', 
      minWidth: 170
  },
    {
      id: 'symbol',
      label: 'Symbol',
      minWidth: 80,
      align: 'right',
    },
    {
      id: 'moves',
      label: 'Moves',
      minWidth: 80,
      align: 'right',
    },
    {
      id: 'duration',
      label: 'Duration (min)',
      minWidth: 80,
      align: 'right',
    },
  ];
  