import { Box, Checkbox, FormControlLabel } from "@mui/material";

const SubDepartment = ({name, checker, i, checked}: {name: string, checker: (a: number) => any, i: number, checked: boolean}) => {

    return (
        <Box position={'relative'} left={60}>
            <FormControlLabel control={<Checkbox checked={checked} onChange={() => checker(i)}/>} label={name}/>
        </Box>
    )
}

export default SubDepartment;