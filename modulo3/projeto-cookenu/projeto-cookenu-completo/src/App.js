import { ThemeProvider } from "@material-ui/core/styles";
import React from "react"
import { useState } from "react";
import Router from "./routes/Router"
import theme from "./constants/theme"
import Header from "./components/Header/Header";
import { BrowserRouter } from "react-router-dom";


const App =() => {

  const token = localStorage.getItem ("token")
  const [rightButtonText, setRigthButtonText] = useState (token ? "Logout": "Login")

  return (
    
    <ThemeProvider theme={theme}>
    
      <BrowserRouter>
      <Header rightButtonText ={rightButtonText} setRigthButtonText ={setRigthButtonText} />
      <Router setRigthButtonText ={setRigthButtonText} />
      </BrowserRouter>

    </ThemeProvider>
  );
}

export default App;
