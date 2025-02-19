import { MenuItem, Typography } from "@mui/material";

const DropdownTitleSection = ({ text }) => (
    <MenuItem disabled>
        <Typography variant="body2" fontWeight="bold">{text}</Typography>
    </MenuItem>
);

export default DropdownTitleSection;
