import Appbar from "@/components/app/navbar";
import { Stack } from "@chakra-ui/react";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <Stack
      h={"100%"}
      overflowY={"auto"}
      maxW={"500px"}
      mx="auto"
      pos={"relative"}
      pb={'5rem'} //navbar-height padding
    >
      <Appbar />
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </Stack>
  );
};

export default AppLayout;
