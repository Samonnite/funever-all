import { Box } from "@chakra-ui/react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <Box h="100vh" w="full" color="white">
      <h2>Something went wrong!</h2>
      <button onClick={() => reset()}>Try again</button>
    </Box>
  );
}
