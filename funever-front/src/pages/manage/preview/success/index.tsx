import { Box, Button, Flex } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

import { SuccessIcon } from "components/Icons";

export default function RootLayout() {
  const navigate = useNavigate();

  return (
    <Flex flex="1" direction="column" color="white" pt="28" alignItems="center">
      <SuccessIcon w="105px" h="90px" />
      <Box fontSize="15px" fontWeight="semibold" pt="16">
        比赛已发布
      </Box>
      <Button
        colorScheme="orange"
        bg="#F95625"
        color="white"
        rounded="base"
        fontSize="md"
        mt="10"
        size="lg"
        w="200px"
        onClick={() => navigate("/manage", { replace: true })}
      >
        返回
      </Button>
    </Flex>
  );
}
