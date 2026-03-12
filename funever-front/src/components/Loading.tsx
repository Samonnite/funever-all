import { Box, Spinner } from "@chakra-ui/react";

export default function Loading() {
  return (
    <Box textAlign="center" pt="12">
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="#F95625"
        size="lg"
      />
    </Box>
  );
}
