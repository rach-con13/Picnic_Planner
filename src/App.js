import logo from "./logo.svg";
import "./App.css";
import GlobalStyles from "./Styles/Theme/globalStyles";
import { ThemeProvider } from "styled-components";
import theme from "./Styles/Theme/theme";
import Header from "./Components/Header/header";
import Dashboard from "./Pages/Dashboard/Dashboard";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <div className="App">
        <Header />
        <Dashboard />
      </div>
    </ThemeProvider>
  );
}

export default App;
