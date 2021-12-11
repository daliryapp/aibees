import { ThemeProvider } from "@mui/material";
import React, { FC } from "react";
import theme from "./theme";

const Provider: FC = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Provider;
