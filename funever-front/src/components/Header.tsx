import { Box, Center, Flex } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

import { BackIcon } from "./Icons";

const Header = ({
  title,
  extra,
  isTransparent,
  ...props
}: {
  title?: React.ReactNode;
  extra?: React.ReactNode;
  isTransparent?: boolean;
  mx?: any;
  sx?: any;
}) => {
  const navigate = useNavigate();

  return (
    <Flex
      alignItems="center"
      gap="5"
      position="sticky"
      top="0"
      bg={isTransparent ? "transparent" : "#1D1D1D"}
      zIndex="20"
      px="3"
      {...props}
    >
      <Flex
        py="4"
        gap="10"
        flex="1"
        alignItems="center"
        minH="14"
        position="relative"
      >
        <BackIcon
          boxSize="6"
          position="absolute"
          left="0"
          onClick={() => navigate(-1)}
        />
        <Box as={Center} color="white" fontSize="17px" w="full">
          {title}
        </Box>
        <Box color="white" fontSize="17px" position="absolute" right="0">
          {extra}
        </Box>
      </Flex>
    </Flex>
  );
};

export default Header;
