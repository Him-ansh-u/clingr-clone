import { Box, IconButton } from "@mui/material";
import { styled } from "@mui/material/styles";
import { motion } from "framer-motion";

export const FlexBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  width: "100%",
});

export const FlexBetween = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
});
export const FlexCenter = styled(Box)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
});

export const HoverIconButton = styled(IconButton)({
  "&:hover": {
    boxShadow:
      "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px inset",
  },
  "&:active": {
    marginTop: "3px ",
  },
});

export const AnimatedTexts = ({ text }) => {
  // splitting text into letters
  const letters = Array.from(text);

  // Variants for Container
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.03, delayChildren: 0.1 * i },
    }),
  };

  // Variants for each letter
  const child = {
    hidden: {
      opacity: 0,
      x: -20,
      y: 10,

      transition: {
        type: "spring",
      },
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        type: "spring",
        duration: 0.2,
      },
    },
  };

  return (
    <motion.div
      style={{ overflow: "hidden", display: "flex", fontSize: "4.5rem" }}
      variants={container}
      initial='hidden'
      animate='visible'>
      {letters.map((letter, index) => (
        <motion.Typography variants={child} key={index}>
          {letter === " " ? "\u00A0" : letter}
        </motion.Typography>
      ))}
    </motion.div>
  );
};
