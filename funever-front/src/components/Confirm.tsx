import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogOverlay,
  Button,
  Flex,
} from "@chakra-ui/react";
import { useRef } from "react";

export default function Confirm({
  isOpen,
  content,
  hiddenCancel = false,
  onClose,
  handleConfirm,
}: {
  isOpen: boolean;
  content?: React.ReactNode;
  hiddenCancel?: boolean;
  onClose: () => void;
  handleConfirm?: () => void;
}) {
  const cancelRef = useRef(null);

  return (
    <AlertDialog
      motionPreset="slideInBottom"
      isOpen={isOpen}
      leastDestructiveRef={cancelRef}
      onClose={onClose}
      closeOnOverlayClick={false}
      isCentered
    >
      <AlertDialogOverlay backdropFilter="blur(3px)">
        <AlertDialogContent
          bg="#1D1D1D"
          mx="10"
          color="white"
          rounded="10px"
          fontSize="sm"
          fontWeight="semibold"
        >
          <AlertDialogBody py="6" textAlign="center">
            {content}
          </AlertDialogBody>

          <AlertDialogFooter
            borderTop="0.5px solid #343B49"
            as={Flex}
            justifyContent="center"
            alignItems="center"
            py="0"
          >
            {!hiddenCancel && (
              <Button
                ref={cancelRef}
                flex="1"
                h="44px"
                onClick={onClose}
                variant="link"
                color="white"
                fontSize="sm"
                textDecoration="none"
                borderRight="0.5px solid #343B49"
                rounded="0"
              >
                取消
              </Button>
            )}
            <Button
              onClick={handleConfirm}
              flex="1"
              h="44px"
              variant="link"
              color="#F95625"
              fontSize="sm"
              textDecoration="none"
              rounded="0"
            >
              确定
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
  );
}
