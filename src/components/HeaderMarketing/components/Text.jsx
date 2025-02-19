import PropTypes from "prop-types";
import { TextField } from "@mui/material";

const Text = (props) => {
    const { inputValues, setInputValues } = props;

    const handleInputChange = (type, event) => {
        const value = event.target.value;

        setInputValues((prev) => ({
            ...prev,
            [type.toLowerCase()]: value,
        }));
    };

    return (
        <TextField
            sx={{
                width: { xs: "100%", sm: "80%", md: "60%", lg: "50%" },
                m: 1,
            }}
            label="Digite o texto"
            variant="outlined"
            fullWidth
            value={inputValues.text}
            onChange={(e) => handleInputChange("text", e)}
        />
    );
};

Text.propTypes = {
    inputValues: PropTypes.object.isRequired,
    setInputValues: PropTypes.func.isRequired,
};

export default Text;