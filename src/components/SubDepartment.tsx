import { Box, Checkbox, FormControlLabel } from "@mui/material";

interface SubDepartmentProps {
    name: string,
    checker: (a: number) => any, 
    i: number, 
    checked: boolean
}

const SubDepartment = ({name, checker, i, checked}: SubDepartmentProps) => {

    return (
        <Box position={'relative'} left={60}>
            <FormControlLabel control={<Checkbox checked={checked} onChange={() => checker(i)}/>} label={name}/>
        </Box>
    )
}

export default SubDepartment;