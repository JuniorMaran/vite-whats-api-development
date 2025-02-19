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

const CancelMarketingLabel = (props) => {
  const { setShowCancelLabel, inputError, setInputError, setButtonValues } =
    props;

  const handleInputChange = (type, event) => {
    const value = event.target.value;
    console.log(value);
    setInputError(value.trim() === "");

    setButtonValues((prev) => ({
      ...prev,
      [type.toLowerCase()]: value,
    }));
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
      <Typography variant="subtitle1" sx={{ mt: 2, fontSize: "14px" }}>
        Recomendamos a adição do botão para recusar o marketing
      </Typography>
      <Typography variant="subtitle2" sx={{ mt: 2, mb: 2, fontSize: "12px" }}>
        Permita que os clientes solicitem a recusa de todas as mensagens de
        marketing. Isso pode ajudar a reduzir os bloqueios pelos clientes e
        aumentar sua classificação de qualidade.
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
          placeholder="Texto para o botão de cancelamento"
          inputProps={{ "aria-label": "Texto para o botão de cancelamento" }}
          helpertext={inputError ? "Este campo é obrigatório." : ""}
          onChange={(e) => handleInputChange("cancelLabel", e)}
          required
        />
        <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />

        <IconButton color="primary" sx={{ p: "10px" }} aria-label="delete">
          <DeleteIcon onClick={() => setShowCancelLabel(false)} />
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

export default CancelMarketingLabel;
