import React, { useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Button, Typography } from "@mui/material";
import styled from "@emotion/styled";

const lightTheme = createTheme({
  palette: {
    mode: "light",
  },
});

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});
const ThemeToggleButton = styled(Button)`
  margin: 20px;
  background-color: ${(props) => props.theme.palette.primary.main};
  color: white;
  &:hover {
    background-color: ${(props) => props.theme.palette.primary.dark};
  }
`;
function App() {
  const [darkMode, setDarkMode] = useState(false);

  const handleThemeToggle = () => {
    setDarkMode(!darkMode);
  };

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <div style={{ textAlign: "center", padding: "20px" }}>
        <Typography variant="h4" component="h1">
          {darkMode ? "Dark Mode" : "Light Mode"}
        </Typography>
        <ThemeToggleButton onClick={handleThemeToggle}>
          Toggle Theme
        </ThemeToggleButton>
      </div>
    </ThemeProvider>
  );
}
export default App;
