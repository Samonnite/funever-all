import { Box } from "@chakra-ui/react";
import { useQRCode } from "next-qrcode";

export default function Qrcode() {
  const { Canvas } = useQRCode();

  return (
    <Box w="66px" h="66px">
      <Canvas
        text={window?.location.host}
        options={{
          errorCorrectionLevel: "M",
          margin: 2,
          scale: 3,
          width: 66,
        }}
      />
    </Box>
  );
}
