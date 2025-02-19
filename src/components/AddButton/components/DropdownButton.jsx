import { MenuItem, ListItemIcon, ListItemText, Typography } from "@mui/material";

const DropdownButton = (props) => {
    const { icon, primaryText, secondaryText, value, onClick, disabled } = props

    return (
        <MenuItem value={value} onClick={(e) => onClick(e) } disabled={disabled}>
            <ListItemIcon>{icon}</ListItemIcon>
            <ListItemText
                primary={primaryText}
                secondary={secondaryText ? <Typography variant="caption" color="text.secondary">{secondaryText}</Typography> : null}
            />
        </MenuItem>
    );
};

export default DropdownButton;
