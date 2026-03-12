import { Box } from "@chakra-ui/react";
import styled from "@emotion/styled";
import { motion } from "framer-motion";
import React from "react";
// material
//

// ----------------------------------------------------------------------

const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transprant;
`;

function Logo() {
  return <Box as="img" src="" sx={{ width: 64, height: 64 }} />;
}

// ----------------------------------------------------------------------

export function LoadingScreen({ ...other }) {
  return (
    <Container {...other}>
      {/* <ProgressBar /> */}

      <motion.div
        initial={{ rotateY: 0 }}
        animate={{ rotateY: 360 }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          repeatDelay: 1,
          repeat: Infinity,
        }}
      >
        <Logo />
      </motion.div>

      <Box
        as={motion.div}
        animate={{
          scale: [1.2, 1, 1, 1.2, 1.2],
          rotate: [270, 0, 0, 270, 270],
          opacity: [0.25, 1, 1, 1, 0.25],
          borderRadius: ["25%", "25%", "50%", "50%", "25%"],
        }}
        sx={{
          width: 100,
          height: 100,
          borderRadius: "25%",
          position: "absolute",
          border: () => "solid 3px black",
        }}
      />

      <Box
        as={motion.div}
        animate={{
          scale: [1, 1.2, 1.2, 1, 1],
          rotate: [0, 270, 270, 0, 0],
          opacity: [1, 0.25, 0.25, 0.25, 1],
          borderRadius: ["25%", "25%", "50%", "50%", "25%"],
        }}
        sx={{
          width: 120,
          height: 120,
          borderRadius: "25%",
          position: "absolute",
          border: () => "solid 8px black",
        }}
      />
    </Container>
  );
}
