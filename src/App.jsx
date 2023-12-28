import { useTheme } from "@mui/material/styles";
import { createContext } from "react";
import { CssBaseline } from "@mui/material";
import Topbar from "./Topbar";
import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection";
import Footer from "./Footer";
import Products from "./Product";
export const AppContext = createContext();

function App() {
  const theme = useTheme();
  return (
    <>
      <CssBaseline />

      <Topbar />
      <HeroSection />
      <Products />
      <AboutSection />
      <Footer />
    </>
  );
}

export default App;
