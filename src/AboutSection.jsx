"use client";
import { Box, IconButton, Typography } from "@mui/material";
import styled from "@emotion/styled";
import { GoStack } from "react-icons/go";
import { IoBagOutline } from "react-icons/io5";
import { FlexBetween, FlexBox } from "./components/Components";
import { useScroll, motion, useTransform } from "framer-motion";
import { useRef } from "react";
const ProductBox = styled(Box)({
  height: "90dvh",
  width: "60%",
  zIndex: "1",
  position: "absolute",
  margin: "0 auto",

  background:
    "url(https://clingr.me/assets/images/media/landing/4.with-you/stylist@md.webp)",
  backgroundRepeat: "no-repeat",
  backgroundSize: "auto",

  backgroundColor: "#37384C",
  color: "#fff",
  overflow: "hidden",
});

const AboutSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1.5", "0.8 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.5, 1]);

  return (
    <motion.div
      style={{
        scale: scaleProgress,
      }}>
      <Box
        ref={ref}
        height='120dvh'
        display='flex'
        overflow='hidden'
        padding='150px 130px 50px 130px'
        backgroundColor='#37384C'
        color='#fff'
        justifyContent='space-between'
        flexDirection='column'>
        <FlexBetween zIndex='2'>
          <Box
            component={motion.div}
            style={{
              scale: scrollYProgress,
            }}
            transition={{ delay: 0.4, duration: 1 }}
            initial={{ y: "50px", opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.7 }}
            width='50%'>
            <Typography>A stylist everywhere</Typography>
            <Typography fontSize='5rem' color='#BC978C' lineHeight='85%'>
              with you
            </Typography>
          </Box>

          <IconButton
            sx={{
              fontSize: "1.2rem",
              padding: " 15px 30px",
              backgroundColor: "#37384C",
              color: "#fff",
              flexDirection: "column",
            }}>
            <IoBagOutline size='2rem' />
            <Typography>Buy</Typography>
          </IconButton>
        </FlexBetween>
        <FlexBetween
          component={motion.div}
          style={{
            scale: scrollYProgress,
          }}
          transition={{ delay: 0, duration: 1 }}
          initial={{ y: "50px", opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.7 }}
          zIndex='2'>
          <FlexBox sx={{ flexDirection: "column", width: "10%" }}>
            <GoStack size='2rem' />
            <Typography>For any surface</Typography>
          </FlexBox>
          <Box width='30%'>
            <Typography fontSize='1rem'>
              Light weight, compact and easy to install, Clingr is easy to take
              with you wherever you go and use in any environment. The
              functionality and design of the holder are clever and robust :
              everything you need to dry your hair comfortably in any situation
              is there. Anywhere
            </Typography>
          </Box>
        </FlexBetween>
        <ProductBox />
      </Box>
    </motion.div>
  );
};

export default AboutSection;
