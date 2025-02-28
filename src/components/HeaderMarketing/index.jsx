
import { useState } from "react";
import PropTypes from "prop-types";
import {
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    TextField,
    Typography
} from "@mui/material";

import InfoLabelsTitle from "@components/Shared/InfoLabelsTitle";
import Video from "@components/HeaderMarketing/components/Video";
import Image from "@components/HeaderMarketing/components/Image";
import Text from "@components/HeaderMarketing/components/Text";
import File from "@components/HeaderMarketing/components/File";

const HeaderMarketing = (props) => {
    const {headerInputValues, setHeaderInputValues, setIsLoading} = props;
    const [headerType, setHeaderType] = useState("Nenhum");
 
    const handleInputChange = (type, event) => {
        const value = event.target.value;
        const files = event.target.files;

        setHeaderInputValues((prev) => ({
            ...prev,
            [type.toLowerCase()]: files ? files[0] : value,
        }));
    };

    const renderHeaderContent = () => {
        switch (headerType) {
            case "text":
                return (
                    <Text
                        headerInputValues={headerInputValues}
                        setHeaderInputValues={setHeaderInputValues}
                    />
                );
            case "image":
                return (
                    <Image
                        headerInputValues={headerInputValues}
                        setHeaderInputValues={setHeaderInputValues}
                        setIsLoading={setIsLoading}
                    />
                );
            case "video":
                return (
                    <Video
                        headerInputValues={headerInputValues}
                        setHeaderInputValues={setHeaderInputValues}
                        setIsLoading={setIsLoading}
                    />
                );
            case "file":
                return (
                    <File
                        headerInputValues={headerInputValues}
                        setHeaderInputValues={setHeaderInputValues}
                        setIsLoading={setIsLoading}
                    />
                );
            case "Localização":
                return (
                    <TextField
                        label="Digite a localização"
                        variant="outlined"
                        fullWidth
                        value={headerInputValues.localizacao}
                        onChange={(e) => handleInputChange("Localizacao", e)}
                    />
                );
            default:
                return;
        }
    };

    return (
        <>
            <InfoLabelsTitle 
                subtitle1="Cabeçalho para sua mensagem de marketing"
                subtitle2={`Adicione um cabeçalho (opcional) para sua mensagem de marketing. \n Esse campo pode conter um texto, uma imagem, um vídeo ou um documento. \n Todos os outros campos aceitarão apenas texto.`}
            />

            <FormControl
                variant="filled"
                sx={{
                    width: "100%",
                }}
            >
                <InputLabel
                    id="demo-simple-select-helper-label"
                >
                    Cabeçalho (Opcional)
                </InputLabel>
                <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    value={headerType}
                    label="Header"
                    onChange={(e) => setHeaderType(e.target.value)}
                    sx={{
                        marginBottom: 1,
                    }}
                >
                    <MenuItem value="Nenhum">Nenhum</MenuItem>
                    <MenuItem value="text">Texto</MenuItem>
                    <MenuItem value="image">Imagem</MenuItem>
                    <MenuItem value="video">Vídeo</MenuItem>
                    <MenuItem value="file">Documento</MenuItem>
                    <MenuItem value="Localizacao">Localização</MenuItem>
                </Select>
            </FormControl>

            {renderHeaderContent()}

        </>
    );
};

HeaderMarketing.propTypes = {
    headerInputValues: PropTypes.object.isRequired,
    setHeaderInputValues: PropTypes.func.isRequired,
    setIsLoading: PropTypes.func.isRequired,
};

export default HeaderMarketing;
