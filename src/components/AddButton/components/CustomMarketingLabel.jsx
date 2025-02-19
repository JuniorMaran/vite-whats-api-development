import React from "react";
import {
  Paper,
  IconButton,
  InputBase,
  Divider,
  Typography,
  FormHelperText
} from "@mui/material";

import DeleteIcon from "@mui/icons-material/Delete";

const CustomMarketingLabel = (props) => {
  const {title, index, showCustomButton, setShowCustomButton, inputError, setInputError } =
    props;
 
    const handleInputChange = (type, event) => {
        const value = event.target.value;
        
        setShowCustomButton((prev) =>
          prev.map((item, i) => (i === index ? value : item))
        );

        setInputError(showCustomButton.some(
            (buttonText, i) => i !== index && buttonText.trim().toLowerCase() === value.trim().toLowerCase()
          )
        ); 
      };

      const deleteCustomLabel = () => {
        setShowCustomButton((prev) => prev.filter((_, i) => i !== index));
      };

  return (
    <Typography
      variant="div"
      sx={{
        m: 1,
        p: 3,
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#f5f5f5",
        width: { xs: "100%", sm: "80%", md: "60%", lg: "50%" },
      }}
    >
      <Typography variant="subtitle2" sx={{ mt: 2, mb: 2, fontSize: "12px" }}>
        Botão personalizado para sua mensagem de marketing
      </Typography>

      <Paper
        component="form"

        sx={{
          p: "2px 4px",
          display: "flex",
          alignItems: "center",
          width: 400,
          flexDirection: "row",
        }}
      >
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Texto para o botão personalizado"
          inputProps={{ "aria-label": "Texto para o botão personalizado" }}
          helpertext={inputError ? "Este campo é obrigatório." : ""}
          value={title}
          onChange={(e) => handleInputChange('customLabel', e)}
          required
        />
        <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />

        <IconButton color="primary" sx={{ p: "10px" }} aria-label="delete">
          <DeleteIcon onClick={() => deleteCustomLabel()} />
        </IconButton>
      </Paper>

      {inputError && (
          <FormHelperText sx={{ color: "#d32f2f", mt: 1 }}>
            Este campo é obrigatório.
          </FormHelperText>
        )}
    </Typography>
  );
};

export default CustomMarketingLabel;
