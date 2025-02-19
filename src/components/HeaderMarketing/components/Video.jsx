import PropTypes from "prop-types";
import { TextField, InputAdornment, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import {uploadMedia} from '../../../services/api';

const Video = (props) => {
    const { inputValues, setInputValues, setIsLoading } = props;

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

    const handleRemoveFile = () => {
        setInputValues((prev) => ({
            ...prev,
            video: "",
        }));
    };

    return (
        <TextField
            sx={{
                width: { xs: "100%", sm: "80%", md: "60%", lg: "50%" },
                m: 1,
            }}
            type="file"
            label="Escolher arquivo MP4"
            variant="outlined"
            fullWidth
            inputProps={{ accept: "video/mp4" }}
            InputLabelProps={{ shrink: true }}
            onChange={(e) => handleInputChange("video", e)}
            InputProps={{
                endAdornment: inputValues.video ? (
                    <InputAdornment position="end">
                        <IconButton onClick={handleRemoveFile} edge="end">
                            <DeleteIcon />
                        </IconButton>
                    </InputAdornment>
                ) : null,
            }}
        />
    );
};

Video.propTypes = {
    inputValues: PropTypes.object.isRequired,
    setInputValues: PropTypes.func.isRequired,
    setIsLoading: PropTypes.func.isRequired,
};

export default Video;