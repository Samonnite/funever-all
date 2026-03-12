import { Button } from "@chakra-ui/react";
import html2canvas from "html2canvas";

export default function GenerateImage() {
  const generateImage = () => {
    const dom = document.getElementById("box-share");
    const canvasPromise = html2canvas(dom!, {
      useCORS: true,
    });
    canvasPromise.then((canvas) => {
      const dataURL = canvas.toDataURL("image/png");
      const downloadElement = document.createElement("a");
      const href = dataURL;
      downloadElement.href = href;
      downloadElement.download = "share";
      document.body.appendChild(downloadElement);
      downloadElement.click();
      document.body.removeChild(downloadElement);
    });
  };
  return (
    <Button
      colorScheme="orange"
      bg="#F95625"
      w="full"
      color="white"
      rounded="base"
      fontSize="md"
      mt="8"
      size="lg"
      mx="auto"
      onClick={() => generateImage()}
    >
      保存图片
    </Button>
  );
}
