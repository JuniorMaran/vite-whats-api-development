import { useState } from "react";
import {
    Typography
} from "@mui/material";
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
        <Typography className="container-marketingmessage" variant="div" 
            sx={{
                display: "flex", 
                flexDirection: "column",
                justifySelf: "center", 
                width: { xs: "100%", sm: "80%", md: "60%", lg: "50%" } 
                }}
            >
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
            {/* <AddButton 
                inputError={inputError}
                setInputError={setInputError}
            /> */}
            <SendMessageButton
                setIsLoading={setIsLoading}
                isLoading={isLoading}
                inputError={inputError}
                setInputError={setInputError}
                headerInputValues={headerInputValues}
                bodyInputValues={bodyInputValues}
                footerInputValues={footerInputValues}
                
            />
        </Typography>
    );
};

export default MarketingMessage;