import PropTypes from "prop-types";
import { TextField } from "@mui/material";

const Text = (props) => {
    const { headerInputValues, setHeaderInputValues } = props;

    const handleInputChange = (type, event) => {
        const value = event.target.value;
        setHeaderInputValues((prev) => ({
            ...prev,
            header: {
                [type.toLowerCase()]: value,
            }

        }));
    };

    return (
        <TextField
            sx={{
                width: "100%",
                marginLeft: 1,
                marginBottom: 5,
            }}
            label="Digite o texto"
            variant="outlined"
            fullWidth
            value={headerInputValues?.text}
            onChange={(e) => handleInputChange("text", e)}
        />
    );
};

Text.propTypes = {
    headerInputValues: PropTypes.object.isRequired,
    setHeaderInputValues: PropTypes.func.isRequired,
};

export default Text;