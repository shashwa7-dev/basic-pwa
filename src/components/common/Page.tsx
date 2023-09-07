import { Flex } from "@chakra-ui/react";
import { ReactNode } from "react";

const Page = ({ children }: { children: ReactNode }) => {
  return <Flex flexGrow={1}>{children}</Flex>;
};

export default Page;
