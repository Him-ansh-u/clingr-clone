import { Box, Button, Typography } from "@mui/material";
import { useRef } from "react";
import { styled } from "@mui/material/styles";
import { FlexBox, FlexCenter } from "./components/Components";
import { motion, useScroll, useTransform } from "framer-motion";

const ContactBox = styled(Box)({
  height: "100%",
  display: "flex",
  justifyContent: "space-between",
  flexDirection: "column",
  backgroundColor: "#fff",
  padding: "50px",
  borderRadius: "20px",
});

/* Custom Components private */

const Footer = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1.5", "1 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.2, 1]);
  const marginProgress = useTransform(scrollYProgress, [40, 0], [40, 0]);

  return (
    <motion.div
      style={{
        scale: scaleProgress,
      }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: "column",
          padding: "50px 180px",
          height: "200dvh",

          borderRadius: "20px",
          background:
            "url(https://clingr.me/assets/images/media/landing/15.become-a-partner/background@md.webp)",
        }}>
        <FlexCenter
          component={motion.div}
          style={{
            flexDirection: "column",
            scale: scaleProgress + 1,
          }}>
          <Typography fontSize='4rem'>Become a partner</Typography>
          <Typography fontSize='4rem'>Join Us</Typography>
        </FlexCenter>

        <FlexBox height='400px' width='100%' padding='0px 20px'>
          <ContactBox sx={{ width: "60%" }}>
            <Typography
              component={motion.p}
              style={{
                scale: scrollYProgress,
              }}
              transition={{ delay: 0.4, duration: 1 }}
              initial={{ marginTop: "-50px", opacity: 0 }}
              whileInView={{ marginTop: 0, opacity: 1 }}
              viewport={{ once: true, amount: 1 }}>
              Do you want to distribute products or establish cooperation with
              Clingr? Email us now! We are ready to discuss any orders from N
              units and arrange delivery to any country ASAP. Clingr is a
              quality product. And we are your reliable partner.
            </Typography>

            <Typography display='flex' justifyContent='end'>
              -Clingr
            </Typography>
          </ContactBox>
          <ContactBox
            sx={{
              width: "40%",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#37384c",
            }}>
            <Button
              component={motion.button}
              style={{
                scale: scrollYProgress,
              }}
              transition={{ delay: 0.4, duration: 1 }}
              initial={{ y: "50px", opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.7 }}
              variant='outlined'
              sx={{
                borderColor: "#fff",
                color: "#fff",
                padding: "10px",
                width: "200px",
              }}>
              Click Me
            </Button>
            <Box
              sx={{
                height: "180px",
                width: "200px",
                right: "220px",
                position: "absolute",
                mt: "90px",

                background:
                  "url(https://clingr.me/assets/images/media/landing/15.become-a-partner/hand-xs@xs.webp)",
                backgroundRepeat: "no-repeat",
                backgroundSize: "auto",
              }}></Box>
          </ContactBox>
        </FlexBox>
      </Box>
      <Box
        backgroundColor='#37384c'
        color='#fff'
        component={motion.div}
        transition={{ delay: 0.4, duration: 1 }}
        initial={{ y: "-50px", z: -5, opacity: 0 }}
        whileInView={{ y: 0, z: 1, opacity: 1 }}
        viewport={{ once: true, amount: 0.7 }}>
        <Box p='10px'>
          <Box width='100%' display='flex' flexDirection='column'>
            <Box display='flex' justifyContent='space-between'>
              <Typography fontSize='1.2rem'>Get in touch with us</Typography>
              <Box display='flex'>
                <Typography>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  earum dolores atque autem sequi magni quos doloremque.
                </Typography>
              </Box>
            </Box>

            <Box
              display='flex'
              width='100%'
              justifyContent='space-between'
              p='0px 20px 0px 20px'>
              <Box display='flex'>
                <Typography>1100-1010-1001 / 0806564566</Typography>
              </Box>
              <Box display='flex'>
                <Typography>world@clingr.me</Typography>
              </Box>
            </Box>
          </Box>
          <hr />
          <Box> &#169; All copyrights reserved to the rightful owner</Box>
        </Box>
      </Box>
    </motion.div>
  );
};

export default Footer;
