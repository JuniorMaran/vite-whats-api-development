import PropTypes from "prop-types";
import { TextField } from "@mui/material";
import BodyMarketingLabel from "@components/BodyMarketing/components/BodyMarketingLabel";

const BodyMarketing = (props) => {
    const {bodyInputValues, setBodyInputValues, inputError, setInputError} = props;
    
    const handleInputChange = (type, event) => {
        const value = event.target.value;

        setInputError(value.trim() === "");
        setBodyInputValues((prev) => ({
            ...prev,
            [type.toLowerCase()]: value,
        }));
    };

    const handleUpdateVariable = (event) => {
        const value = event.target.value;
        const matches = value.match(/{{(.+?)}}/g) || [];
        
        const existingVariables = { ...bodyInputValues?.buttonVariables };
        const newVariables = {};
        
        matches.forEach(match => {
            newVariables[match] = existingVariables[match] || "";
        });
        setBodyInputValues(prevState => ({
            ...prevState,
            buttonVariables: newVariables
        }));
    };

    return (
        <>
            <TextField
                sx={{
                    width: { xs: "100%", sm: "80%", md: "60%", lg: "50%" },
                    m: 1,
                }}
                id="filled-multiline-static"
                label="Corpo (Obrigatório)"
                multiline
                rows={4}
                // defaultValue="Default Value"
                variant="filled"
                error={inputError}
                value={bodyInputValues?.body}
                onChange={(e) => {
                    handleInputChange("body", e);
                    handleUpdateVariable(e);
                }}              
                helpertext={inputError ? "Este campo é obrigatório." : ""}
                required
            />
            {bodyInputValues && Object.entries(bodyInputValues.buttonVariables).map(([variableKey, variableValue]) => (
                <BodyMarketingLabel 
                    key={variableKey}
                    variableKey={variableKey}
                    variableValue={variableValue}
                    setBodyInputValues={setBodyInputValues} 
                    inputError={inputError} 
                    setInputError={setInputError} 
                />
            ))
            }
        </>
    );
};

BodyMarketing.propTypes = {
    bodyInputValues: PropTypes.object.isRequired,
    setBodyInputValues: PropTypes.func.isRequired,
    inputError: PropTypes.bool.isRequired,
    setInputError: PropTypes.func.isRequired,
};

export default BodyMarketing;