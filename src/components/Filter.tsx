import { Box } from "@mui/material";
import Department from "./Department";

const departments = [
    {
        'name': 'Customer Service',
        'sub_departments': ['support', 'customer_success']
    },
    {
        name: 'Design',
        sub_departments: ["graphic_design","product_design","web_design"]
    }
]

const Filter = () => <Box>
    {departments.map((dep) => <Department department={dep} />)}
</Box>

export default Filter;