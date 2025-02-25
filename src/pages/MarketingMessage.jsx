import { useState } from "react";
import HeaderMarketing from "@components/HeaderMarketing";
import BodyMarketing from "@components/BodyMarketing";
import FooterMarketing from "@components/FooterMarketing";
import SendMessageButton from "@components/SendMessageButton";
import AddButton from "@components/AddButton";

const MarketingMessage = () => {
    const [headerInputValues, setHeaderInputValues] = useState();
    const [bodyInputValues, setBodyInputValues] = useState();
    const [footerInputValues, setFooterInputValues] = useState();
    const [isLoading, setIsLoading] = useState(false);
    const [inputError, setInputError] = useState(false);

    return (
        <>
            <HeaderMarketing
                headerInputValues={headerInputValues}
                setHeaderInputValues={setHeaderInputValues}
                setIsLoading={setIsLoading}
            />
            <BodyMarketing
                bodyInputValues={bodyInputValues}
                setBodyInputValues={setBodyInputValues}
                inputError={inputError}
                setInputError={setInputError}
            />
            <FooterMarketing 
                footerInputValues={footerInputValues} 
                setFooterInputValues={setFooterInputValues} 
            />
            <AddButton 
                inputError={inputError}
                setInputError={setInputError}
            />
            <SendMessageButton
                setIsLoading={setIsLoading}
                isLoading={isLoading}
                inputError={inputError}
                setInputError={setInputError}
                headerInputValues={headerInputValues}
                bodyInputValues={bodyInputValues}
                footerInputValues={footerInputValues}
                
            />
        </>
    );
};

export default MarketingMessage;