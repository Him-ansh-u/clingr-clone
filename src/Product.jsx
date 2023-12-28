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
  left: 0,
  right: 0,
  background:
    "url(https://clingr.me/assets/images/media/landing/2.description/clingr-xs@xs.webp)",
  backgroundRepeat: "no-repeat",
  backgroundSize: "auto",

  backgroundColor: "#eeeeee",
  color: "#fff",
  overflow: "hidden",
});

const Products = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1.5", "1 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.5, 1]);

  return (
    <motion.div
      style={{
        scale: scaleProgress,
      }}>
      <Box
        ref={ref}
        height='110dvh'
        display='flex'
        padding='70px 100px'
        backgroundColor='#eeeeee'
        justifyContent='space-between'
        flexDirection='column'>
        <FlexBetween zIndex='2'>
          <Typography
            component={motion.p}
            style={{
              scale: scrollYProgress,
            }}
            transition={{ delay: 0.4, duration: 1 }}
            initial={{ y: "50px", opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.7 }}
            width='50%'
            fontSize='1.5em'>
            An innovative hair dryer clip that frees both hands. With it, you
            can get animpeccable hair style in just 10 minutes.
          </Typography>
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
          <Box width='45%'>
            <Typography fontSize='1.2rem'>
              On any surface. Anywhere: at home , at the gymor anywhere else.
              Simply clip on a Clingr and style your hair like in a salon,
              keeping the natural beauty of your hair.
            </Typography>
          </Box>
        </FlexBetween>
        <ProductBox />
      </Box>
    </motion.div>
  );
};

export default Products;
