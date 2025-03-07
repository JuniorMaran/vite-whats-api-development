import PropTypes from "prop-types";
import { TextField } from "@mui/material";
import {uploadMedia} from '../../../services/api';

const Image = (props) => {
    const { setHeaderInputValues, setIsLoading } = props;

    const handleInputChange = async (type, event) => {
        const value = event.target.files[0];
    
        setIsLoading(true);
        try {
            const response = await uploadMedia(value);
    
            setHeaderInputValues((prev) => ({
                ...prev,
                header: {
                    type: type.toLowerCase(),
                    id: response.id,
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
            label="Selecione uma imagem"
            variant="outlined"
            fullWidth
            inputProps={{ accept: "image/jpeg, image/png" }}
            InputLabelProps={{ shrink: true }}
            onChange={(e) => handleInputChange("image", e)}
        />
    );
};

Image.propTypes = {
    setHeaderInputValues: PropTypes.func.isRequired,
    setIsLoading: PropTypes.func.isRequired,
};

export default Image;