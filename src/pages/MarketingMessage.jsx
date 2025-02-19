import { useState } from "react";
import HeaderMarketing from "@components/HeaderMarketing";
import BodyMarketing from "@components/BodyMarketing";
import FooterMarketing from "@components/FooterMarketing";
import SendMessageButton from "@components/SendMessageButton";
import AddButton from "@components/AddButton";

const MarketingMessage = () => {
    const [inputValues, setInputValues] = useState({
        text: "",
        id: "",
        localizacao: "",
        body: "",
        footer: "",
    });

    const [isLoading, setIsLoading] = useState(false);
    const [inputError, setInputError] = useState(false);

    return (
        <>
            <HeaderMarketing                 
                inputValues={inputValues}
                setInputValues={setInputValues}
                setIsLoading={setIsLoading}
            />
            <BodyMarketing
                inputValues={inputValues}
                setInputValues={setInputValues}
                inputError={inputError}
                setInputError={setInputError}
            />
            <FooterMarketing inputValues={inputValues} setInputValues={setInputValues} />
            <AddButton 
                inputError={inputError}
                setInputError={setInputError}
            />
            <SendMessageButton
                setIsLoading={setIsLoading}
                isLoading={isLoading}
                inputError={inputError}
                setInputError={setInputError}
                inputValues={inputValues}
            />
        </>
    );
};

export default MarketingMessage;
