import PropTypes from "prop-types";
import { TextField } from "@mui/material";

const FooterMarketing = (props) => {
    const { footerInputValues, setFooterInputValues } = props;
    const handleInputChange = (type, event) => {
        const value = event.target.value;

        setFooterInputValues((prev) => ({
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
            id="filled-multiline-static"
            label="Rodapé (Opcional)"
            multiline
            rows={4}
            // defaultValue="Default Value"
            variant="filled"
            value={footerInputValues?.footer}
            onChange={(e) => handleInputChange("footer", e)}
        />
    );
};

FooterMarketing.propTypes = {
    footerInputValues: PropTypes.object.isRequired,
    setFooterInputValues: PropTypes.func.isRequired,
};

export default FooterMarketing;