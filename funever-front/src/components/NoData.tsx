import { Box } from "@chakra-ui/react";

import { EmptyIcon } from "./Icons";

export default function NoData({ content }: { content?: React.ReactNode }) {
  return (
    <Box textAlign="center" pt="36">
      <EmptyIcon width="55px" height="60px" />
      <Box fontSize="xs" color="#A4A7B2" pt="4">
        {content || "暂无数据"}
      </Box>
    </Box>
  );
}
