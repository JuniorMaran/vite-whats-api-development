import React, { useState } from "react";
import {
  FormControl,
  Select,
  InputLabel,
  Box,
  Typography
} from "@mui/material";
import LinkIcon from "@mui/icons-material/Link";
import PhoneIcon from "@mui/icons-material/Phone";
import AddIcon from "@mui/icons-material/Add";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

import DropdownItem from "@components/AddButton/components/DropdownButton";
import DropdownSectionTitle from "@components/AddButton/DropdownTitleSection";
import CancelMarketing from "@components/AddButton/components/CancelMarketing";
import CancelMarketingLabel from "@components/AddButton/components/CancelMarketingLabel";
import CustomMarketing from "@components/AddButton/components/CustomMarketing";
import CustomMarketingLabel from "@components/AddButton/components/CustomMarketingLabel";

const AddButton = (props) => {
  const { inputError, setInputError } = props;

  const [selectedOption, setSelectedOption] = useState("");
  const [showCancelLabel, setShowCancelLabel] = useState(false);
  const [showCustomButton, setShowCustomButton] = useState([]);
  const [buttonsValues, setButtonValues] = useState({
    type: "",
});

  return (
    <>
    <FormControl
      variant="filled"
      sx={{ width: { xs: "100%", sm: "80%", md: "60%", lg: "50%" }, m: 1 }}
    >
      <InputLabel id="dropdown-label">
        <Box display="flex" alignItems="center" gap={1}>
          <AddIcon fontSize="small" />
          <Typography variant="body2">Adicionar Botão (Opcional)</Typography>
        </Box>
      </InputLabel>
      <Select
        labelId="dropdown-label"
        value={selectedOption}
        onChange={(e) => setSelectedOption(e.target.value)}
      >
        <DropdownSectionTitle text="Botões de resposta rápida" />

        <CancelMarketing showCancelLabel={showCancelLabel} setShowCancelLabel={setShowCancelLabel} />
        <CustomMarketing showCustomButton={showCustomButton} setShowCustomButton={setShowCustomButton} />

        <DropdownSectionTitle text="Botões de chamada para ação" />
        <DropdownItem
          icon={<LinkIcon fontSize="small" />}
          primaryText="Acessar o site"
          secondaryText="Máx. 2 botões"
          value="acessar-site"
        />
        <DropdownItem
          icon={<PhoneIcon fontSize="small" />}
          primaryText="Ligar"
          secondaryText="Máx. 1 botão"
          value="ligar"
        />
        <DropdownItem
          icon={<ContentCopyIcon fontSize="small" />}
          primaryText="Copiar código da oferta"
          secondaryText="Máx. 1 botão"
          value="copiar-codigo"
        />
      </Select>
    </FormControl>
    {showCancelLabel && 
      <CancelMarketingLabel 
        setShowCancelLabel={setShowCancelLabel}
        inputError={inputError}
        setInputError={setInputError}
        setButtonValues={setButtonValues}
      />
    }
    {showCustomButton.length > 0 && 
    showCustomButton.map((item, index) => (
      <CustomMarketingLabel
        key={index}
        index={index}
        title={item}
        setShowCustomButton={setShowCustomButton}
        showCustomButton={showCustomButton}
        inputError={inputError}
        setInputError={setInputError}
        setButtonValues={setButtonValues}
      />
      ))}
    </>
  );
};

export default AddButton;
