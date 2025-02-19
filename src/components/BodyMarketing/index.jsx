import {useState} from "react";
import PropTypes from "prop-types";
import { TextField } from "@mui/material";
import BodyMarketingLabel from "@components/BodyMarketing/components/BodyMarketingLabel";

const BodyMarketing = (props) => {
    const { inputValues, setInputValues, inputError, setInputError} = props;
    const [variables, setVariables] = useState({});
    console.log('variables', variables);
    
    const handleInputChange = (type, event) => {
        const value = event.target.value;

        setInputError(value.trim() === "");
        setInputValues((prev) => ({
            ...prev,
            [type.toLowerCase()]: value,
        }));
    };

    const handleUpdateVariable = (event) => {
        const value = event.target.value;
        const matches = value.match(/{{\d+}}/g) || [];

        setVariables((prevVars) => {
            const newVars = { ...prevVars };
            matches.forEach((match) => {
                if (!(match in newVars)) {
                    newVars[match] = '';
                }
            });
            return newVars;
        });
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
                value={inputValues.body}
                onChange={(e) => {
                    handleInputChange("body", e);
                    handleUpdateVariable(e);
                }}              
                helpertext={inputError ? "Este campo é obrigatório." : ""}
                required
            />
            {Object.entries(variables).map(([variableKey, variableValue]) => (
                <BodyMarketingLabel 
                    key={variableKey}
                    variableKey={variableKey}
                    variableValue={variableValue}
                    setVariables={setVariables} 
                    inputError={inputError} 
                    setInputError={setInputError} 
                />
            ))
            }
        </>
    );
};

BodyMarketing.propTypes = {
    inputValues: PropTypes.object.isRequired,
    setInputValues: PropTypes.func.isRequired,
    inputError: PropTypes.bool.isRequired,
    setInputError: PropTypes.func.isRequired,
};

export default BodyMarketing;