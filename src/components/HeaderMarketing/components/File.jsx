import PropTypes from "prop-types";
import { TextField } from "@mui/material";
import {uploadMedia} from '../../../services/api';

const File = (props) => {
    const { setHeaderInputValues, setIsLoading } = props;

    const handleInputChange = async (type, event) => {
        const value = event.target.files[0];

        setIsLoading(true);
        try {
            const response = await uploadMedia(value);
            
            setHeaderInputValues((prev) => ({
                header: {
                    ...prev,
                    type: type?.toLowerCase(),
                    id: response?.id,
                }

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
                width: "100%",
                marginLeft: 1,
                marginBottom: 5,
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
    setHeaderInputValues: PropTypes.func.isRequired,
    setIsLoading: PropTypes.func.isRequired,
};

export default File;