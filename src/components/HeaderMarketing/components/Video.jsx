import PropTypes from "prop-types";
import { TextField, InputAdornment, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import {uploadMedia} from '../../../services/api';

const Video = (props) => {
    const { headerInputValues, setHeaderInputValues, setIsLoading } = props;

    const handleInputChange = async (type, event) => {
        const value = event.target.files[0];

        setIsLoading(true);
        try {
            const response = await uploadMedia(value);

            setHeaderInputValues((prev) => ({
                header: {
                    ...prev,
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

    const handleRemoveFile = () => {
        setHeaderInputValues((prev) => ({
            ...prev,
            video: "",
        }));
    };

    return (
        <TextField
            sx={{
                width: "100%",
                marginLeft: 1,
                marginBottom: 5,
            }}
            type="file"
            label="Escolher arquivo MP4"
            variant="outlined"
            fullWidth
            inputProps={{ accept: "video/mp4" }}
            InputLabelProps={{ shrink: true }}
            onChange={(e) => handleInputChange("video", e)}
            InputProps={{
                endAdornment: headerInputValues?.video ? (
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
    headerInputValues: PropTypes.object.isRequired,
    setHeaderInputValues: PropTypes.func.isRequired,
    setIsLoading: PropTypes.func.isRequired,
};

export default Video;