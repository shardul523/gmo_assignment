import {IoMdArrowDropdown, IoMdArrowDropup} from 'react-icons/io'
import { Box, Checkbox, FormControlLabel, IconButton } from '@mui/material';
import { useEffect, useState } from 'react';

import SubDepartment from './SubDepartment';

const Department = ({department}:{department: {name:string, sub_departments:string[]}}) => {
    const [show, setShow] = useState(false);
    const [isChecked, setIsChecked] = useState(false)
    const [subIsChecked, setSubIsChecked] = useState(Array.from({length: department.sub_departments.length}, () => false));

    useEffect(() => {
        let notChecked = false;
        for (let check of subIsChecked)
            if (!check) {
                notChecked = true;
                break;
            }
        if (!notChecked) setIsChecked(true);
        else setIsChecked(false);
    }, [subIsChecked]);

    const subChecker = (a: number) => {
        setSubIsChecked(prev => prev.map((org, i) => {
            if (i === a)
                return !org;
            return org;
        }));
    }

    const mainChecker = () => {
        setSubIsChecked(Array.from({length: department.sub_departments.length}, () => !isChecked));
        setIsChecked(prev => !prev);
    }

    return (
        <Box>
            <IconButton onClick={() => setShow(prev => !prev)}>
                {show ? <IoMdArrowDropup/> : <IoMdArrowDropdown/>}
            </IconButton>
            <FormControlLabel control={<Checkbox checked={isChecked} onChange={mainChecker} />} label={department.name} />
            {
                show && department.sub_departments.map((nm, i) => <SubDepartment checked={subIsChecked[i]} checker={subChecker} i={i} key={i} name={nm} />)
            }
        </Box>
    )
}

export default Department;