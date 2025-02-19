import PropTypes from "prop-types";
import { TextField } from "@mui/material";
import {uploadMedia} from '../../../services/api';

const Image = (props) => {
    const { setInputValues, setIsLoading } = props;

    const handleInputChange = async (type, event) => {
        const value = event.target.files[0];
    
        setIsLoading(true);
        try {
            const response = await uploadMedia(value);
    
            setInputValues((prev) => ({
                ...prev,
                type: type.toLowerCase(),
                id: response.id,
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
    setInputValues: PropTypes.func.isRequired,
    setIsLoading: PropTypes.func.isRequired,
};

export default Image;