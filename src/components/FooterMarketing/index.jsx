import PropTypes from "prop-types";
import { TextField } from "@mui/material";
import InfoLabelsTitle from "@components/Shared/InfoLabelsTitle";

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
    <>
      <InfoLabelsTitle
        subtitle1="Rodapé para sua mensagem de marketing"
        subtitle2={`Adicione um Rodapé (opcional) para sua mensagem de marketing. \n Esse campo pode conter apenas texto. \n Sugestão: Envie SAIR para não receber mais mensagens.`}
      />

      <TextField
        sx={{
          width: "100%",
          marginBottom: 5,
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
    </>
  );
};

FooterMarketing.propTypes = {
  footerInputValues: PropTypes.object.isRequired,
  setFooterInputValues: PropTypes.func.isRequired,
};

export default FooterMarketing;
