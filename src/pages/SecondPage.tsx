import Filter from "../components/Filter"
import { Navigate } from "react-router-dom";
import {DataGrid, GridColDef} from '@mui/x-data-grid'
import { useEffect, useState } from "react";
import { Box } from "@mui/material";

const columns: GridColDef[] = [
    {
        field: 'id',
        headerName: 'ID',
        width: 90
    },
    {
        field: 'userId',
        headerName: 'User ID',
        width: 90
    },
    {
        field: 'title',
        headerName: 'Title',
        width: 150
    },
    {
        field: 'body',
        headerName: "Body",
        width: 300
    }
]

const SecondPage = () => {
    if (!localStorage.getItem('name') || !localStorage.getItem('phone') || !localStorage.getItem('email'))
        return <Navigate to={'/'} replace/>
    const [data, setData] = useState();

    useEffect(() => {
        const fetchJson = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/posts');
                const json = await response.json();
                setData(json);
            } catch(e) {
                setData(undefined);
            }
        };
        fetchJson(); 
    }, []);


    return (
        <Box>
            {!!data && 
            <DataGrid
            rows={data}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: {
                  pageSize: 5,
                },
              },
            }}
            pageSizeOptions={[5]}
          />
            }
            <Filter/>
        </Box>
    )
}

export default SecondPage;