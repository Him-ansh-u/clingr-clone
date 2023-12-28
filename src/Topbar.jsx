import MuiAppBar from "@mui/material/AppBar";
import { styled, useTheme } from "@mui/material/styles";
import { useContext } from "react";
import { motion } from "framer-motion";
import { CiMenuBurger } from "react-icons/ci";
import { Toolbar, Typography, Box, Button } from "@mui/material";

import { AppContext } from "./App";

import { FlexBetween } from "./components/Components";

const AppBar = styled(MuiAppBar)(({ theme }) => ({
  position: "absolute",
  backgroundColor: "#C7C4C501",
  padding: "20px 80px 20px 80px",
  boxShadow: "none",
}));

const NavButton = styled(Button)({
  color: "#FFF",
  padding: "5px 10px 5px 10px",
  fontSize: "1.1rem",
  "&:hover": {
    cursor: "pointer",
  },
  "&:active": {
    marginTop: "4px",
  },
});

const Topbar = () => {
  return (
    <AppBar>
      <Toolbar>
        <FlexBetween>
          <Typography
            fontSize='1.4rem'
            component={motion.p}
            transition={{ delay: 0.4 }}
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}>
            Clingr
          </Typography>
          <Box
            component={motion.div}
            transition={{ delay: 0.4 }}
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            display='flex'
            justifyContent='space-around'
            width='120px'>
            <NavButton>Buy</NavButton>
            <NavButton>
              <CiMenuBurger />
            </NavButton>
          </Box>
        </FlexBetween>
      </Toolbar>
    </AppBar>
  );
};

export default Topbar;
