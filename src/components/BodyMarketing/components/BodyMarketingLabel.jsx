import { TextField } from "@mui/material";
import PropTypes from "prop-types";

const BodyMarketingLabel = (props) => {
  const { variableKey, variableValue, setBodyInputValues } = props;

  const handleInputChange = (event) => {
    const value = event.target.value;

    setBodyInputValues((prev) => ({
        ...prev,
        buttonVariables: {
            ...prev.buttonVariables,
            [variableKey]: value,
        },
    }));
};

  return (
    <TextField
      sx={{
        width: { xs: "100%", sm: "80%", md: "60%", lg: "50%" },
        m: 1,
      }}
      label={variableKey}
      variant="outlined"
      fullWidth
      value={variableValue || ""}
      onChange={(e) => handleInputChange(e)}
    />
  );
};

BodyMarketingLabel.propTypes = {
  variableKey: PropTypes.string.isRequired,  // Deve ser uma string obrigatória
  variableValue: PropTypes.string,          // Pode ser uma string (opcional)
  setBodyInputValues: PropTypes.func.isRequired,  // Deve ser uma função obrigatória
};

export default BodyMarketingLabel;