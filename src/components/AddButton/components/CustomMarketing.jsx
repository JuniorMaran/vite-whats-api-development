import React from "react";

import EditIcon from "@mui/icons-material/Edit";
import DropdownButton from "@components/AddButton/components/DropdownButton";
const CustomMarketing = (props) => {
    const { showCustomButton, setShowCustomButton } = props;

    const CustomMessage = () => {
        showCustomButton.length <= 5 && setShowCustomButton((prev) => [...(prev ?? []) , '']);
    }

    return (
        <>
            <DropdownButton
            icon={<EditIcon fontSize="small" />}
            primaryText="Personalizado"
            secondaryText="Máx. 5 botões"
            value="personalizado"
            onClick={() => CustomMessage()}
            disabled={showCustomButton.length >= 5}
            />
        </>
    );
};

export default CustomMarketing;