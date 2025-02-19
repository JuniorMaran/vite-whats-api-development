import React from "react";

import CancelIcon from "@mui/icons-material/Cancel";
import DropdownButton from "@components/AddButton/components/DropdownButton";
const CancelMarketing = (props) => {
    const { showCancelLabel, setShowCancelLabel } = props;

    const CancelMessage = (event) => {
        setShowCancelLabel(true);
       console.log(event.target.value);
        
    }

    return (
        <>
        <DropdownButton
            icon={<CancelIcon fontSize="small" />}
            primaryText="Cancelar marketing"
            secondaryText="Recomendado"
            value="cancelar-marketing"
            onClick={(event) => CancelMessage(event)}
            disabled={showCancelLabel}
        />

        </>
    );
};

export default CancelMarketing;