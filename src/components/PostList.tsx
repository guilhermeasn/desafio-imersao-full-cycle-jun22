import { Alert, Box, Button } from '@mui/material';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { findAll, Post } from '../misc/http';

import theme from '../misc/theme';

const columns : GridColDef[] = [
    {
        field: 'title',
        headerName: 'Postagens',
        flex: 1,
        filterable: false,
        hideable: false,
        headerClassName: 'data-grid-header',
        cellClassName: 'data-grid-cell'
    }
];

export default function PostList() {

    const nav = useNavigate();

    const [ fail, setFail ] = useState<boolean>(false);
    const [ rows, setRows ] = useState<Omit<Post,'body'>[]|undefined>();

    useEffect(() => { (async () => {

        try {
            setRows(await findAll());
        } catch(error) {
            setFail(true);
            console.error(error);
        }

    })() }, [fail]);

    return fail ? (

        <>

            <Alert severity="error">
                Não foi possível obter as postagens!
            </Alert>
            
            <Button onClick={ () => setFail(false) }>
                Tentar novamente
            </Button>

        </>

    ) : (

        <Box sx={{ height: 400, width: '100%', '& .data-grid-header': {
            backgroundColor: theme.palette.secondary.main,
            color: theme.palette.secondary.contrastText
          }, '& .data-grid-cell': {
            cursor: 'pointer'
          }}}>

            <DataGrid
                loading={ (rows === undefined) ? true : false }
                columns={ columns }
                rows={ rows ?? [] }
                pageSize={5}
                rowsPerPageOptions={[5]}
                onCellClick={ ({ id }) => nav(`/${ id }`) }
                disableColumnMenu
                disableSelectionOnClick
            />

        </Box>

    );

}
