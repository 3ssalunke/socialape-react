import { IconButton, Tooltip } from "@material-ui/core";
import React from "react";

export default function MyButton({
  children,
  tip,
  btnClassName,
  onClick,
  tipClassName,
}) {
  return (
    <Tooltip title={tip} className={tipClassName}>
      <IconButton onClick={onClick} className={btnClassName}>
        {children}
      </IconButton>
    </Tooltip>
  );
}
