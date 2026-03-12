import { Flex, useDisclosure } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";

import { WalletMask } from "./wallet";

const MainContent = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Flex direction="column" h="100vh">
      <WalletMask isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
      <Outlet context={{ onOpen, onClose }} />
    </Flex>
  );
};

export default MainContent;
