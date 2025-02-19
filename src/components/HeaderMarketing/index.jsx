import React, { useState } from "react";

import {
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    TextField
} from "@mui/material";


import Video from "@components/HeaderMarketing/components/Video";
import Image from "@components/HeaderMarketing/components/Image";
import Text from "@components/HeaderMarketing/components/Text";
import File from "@components/HeaderMarketing/components/File";

const HeaderMarketing = (props) => {
    const {inputValues, setInputValues, setIsLoading} = props;
    const [headerType, setHeaderType] = useState("Nenhum");
 
    const handleInputChange = (type, event) => {
        const value = event.target.value;
        const files = event.target.files;

        setInputValues((prev) => ({
            ...prev,
            [type.toLowerCase()]: files ? files[0] : value,
        }));
    };

    const renderHeaderContent = () => {
        switch (headerType) {
            case "text":
                return (
                    <Text
                        inputValues={inputValues}
                        setInputValues={setInputValues}
                    />
                );
            case "image":
                return (
                    <Image
                        inputValues={inputValues}
                        setInputValues={setInputValues}
                        setIsLoading={setIsLoading}
                    />
                );
            case "video":
                return (
                    <Video
                        inputValues={inputValues}
                        setInputValues={setInputValues}
                        setIsLoading={setIsLoading}
                    />
                );
            case "file":
                return (
                    <File
                        inputValues={inputValues}
                        setInputValues={setInputValues}
                        setIsLoading={setIsLoading}
                    />
                );
            case "Localização":
                return (
                    <TextField
                        label="Digite a localização"
                        variant="outlined"
                        fullWidth
                        value={inputValues.localizacao}
                        onChange={(e) => handleInputChange("Localizacao", e)}
                    />
                );
            default:
                return;
        }
    };

    return (
        <>
            <FormControl
                variant="filled"
                sx={{
                    width: { xs: "100%", sm: "80%", md: "60%", lg: "50%" },
                    m: 1,
                }}
            >
                <InputLabel
                    id="demo-simple-select-helper-label"
                    className="pb-5"
                >
                    Cabeçalho (Opcional)
                </InputLabel>
                <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    value={headerType}
                    label="Header"
                    onChange={(e) => setHeaderType(e.target.value)}
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

export default HeaderMarketing;
