import PropTypes from "prop-types";
import { TextField } from "@mui/material";
import {uploadMedia} from '../../../services/api';

const File = (props) => {
    const { setInputValues, setIsLoading } = props;

    const handleInputChange = async (type, event) => {
        const value = event.target.files[0];

        setIsLoading(true);
        try {
            const response = await uploadMedia(value);
            
            setInputValues((prev) => ({
                ...prev,
                type: type?.toLowerCase(),
                id: response?.id,
            }));
        } catch (error) {
            console.error("Erro ao enviar arquivo:", error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <TextField
            sx={{
                width: { xs: "100%", sm: "80%", md: "60%", lg: "50%" },
                m: 1,
            }}
            type="file"
            label="Selecione um documento"
            variant="outlined"
            fullWidth
            inputProps={{ accept: "application/pdf" }}
            InputLabelProps={{ shrink: true }}
            onChange={(e) => handleInputChange("document", e)}
        />
    );
};

File.propTypes = {
    setInputValues: PropTypes.func.isRequired,
    setIsLoading: PropTypes.func.isRequired,
};

export default File;