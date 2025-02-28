import { useState } from "react";
import PropTypes from "prop-types";
import { Typography } from "@mui/material";

const InfoLabelsTitle = (props) => {
  const { subtitle1, subtitle2 } = props;

  return (
    <>
      {subtitle1 && (
        <Typography
          variant="subtitle1"
          sx={{
            fontSize: "14px",
            width: "100%",
            backgroundColor: "#f5f5f5",
            textAlign: "center",
          }}
        >
          {subtitle1}
        </Typography>
      )}
      {subtitle2 && (
          <Typography
            variant="subtitle2"
            sx={{
              fontSize: "12px",
              width: "100%",
              backgroundColor: "#f5f5f5",
              textAlign: "center",
              whiteSpace:"pre-line"
            }}
          >
            {subtitle2}
          </Typography>
        )
      }
    </>
  );
};

export default InfoLabelsTitle;
