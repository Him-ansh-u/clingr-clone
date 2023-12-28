/* External Components */
import styled from "@emotion/styled";
import { Box, Typography, Button, duration, Hidden } from "@mui/material";

import { motion } from "framer-motion";

/* Icons */

/* Custom Components private */
const Hero = styled(Box)({
  height: "100dvh",
  width: "100%",
  background:
    "url(https://clingr.me/assets/images/media/landing/1.intro/intro-background-xl@md.webp)",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundAttachment: "fixed",
  padding: "0 100px",
  backgroundColor: "#06030A",
  color: "#fff",
  overflow: "hidden",
});

const HeroBox = styled(Box)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  height: "100%",
});

/* Main componet */
const HeroSection = () => {
  return (
    <motion.div
      initial={{ y: "-500px" }}
      transition={{ duration: 0.5 }}
      animate={{ y: 0 }}>
      <Hero>
        <HeroBox>
          <Typography
            component={motion.div}
            transition={{ delay: 0.5, duration: 1 }}
            initial={{ opacity: 0, y: "40px" }}
            animate={{ opacity: 1, y: 0 }}
            variant='h1'>
            Beautiful hair?
          </Typography>
          <Typography
            sx={{ lineHeight: "75px" }}
            component={motion.div}
            transition={{ delay: 0.7, duration: 1 }}
            initial={{ opacity: 0, y: "40px" }}
            animate={{ opacity: 1, y: 0 }}
            variant='h1'>
            It is easy and
          </Typography>
          <Typography
            component={motion.div}
            transition={{ delay: 1, duration: 1 }}
            initial={{ opacity: 0, y: "40px" }}
            animate={{ opacity: 1, y: 0 }}
            variant='h1'>
            Wonderful!
          </Typography>
          <Box
            component={motion.div}
            transition={{ delay: 1, duration: 1 }}
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            height='200px'
            width='350px'
            borderRadius='20px'
            position='absolute'
            bottom='60px'
            right='100px'>
            <iframe
              height='200px'
              width='350px'
              style={{ borderRadius: "20px", border: "none" }}
              src='https://player.vimeo.com/video/724439058?title=0&amp;byline=0&amp;portrait=0&amp;muted=1&amp;autoplay=1&amp;pip=0&amp;controls=0&amp;loop=1&amp;background=1'
              allow='autoplay; encrypted-media'
              title='Clingr intro'></iframe>
          </Box>
        </HeroBox>
      </Hero>
    </motion.div>
  );
};

export default HeroSection;
