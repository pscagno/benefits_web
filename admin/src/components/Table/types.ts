export interface Column {
    id: string;
    label: string;
    align: 'center' | 'inherit' | 'justify' | 'left' | 'right';
    render?: (row: any) => JSX.Element; // TODO: replace any with your data structure
}

export interface Row {
    id: string;
    // other properties depending on your data structure
}

export interface BasicTableProps {
    data: Row[];
    columns: Column[];
}