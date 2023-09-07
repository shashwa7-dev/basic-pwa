import { Flex } from "@chakra-ui/react";
import { ReactNode } from "react";

const Page = ({ children }: { children: ReactNode }) => {
  return (
    <Flex flexDir="column" flexGrow={1} p={2}>
      {children}
    </Flex>
  );
};

export default Page;
