import assets from "@/assets";
import { Button, Flex, Image } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

const Appbar = () => {
  return (
    <Flex
      pos={"fixed"}
      bottom={0}
      mx="auto"
      maxW={"500px"}
      left={0}
      right={0}
      w={"full"}
      p={2}
      pt={4}
      borderRadius={"10px 10px 0px 0px"}
      background={"brand.secondary"}
      justifyContent={"space-evenly"}
    >
      <NavLink to={"/"}>
        {({ isActive }) => (
          <Button
            variant={isActive ? "solid" : "ghost"}
            w={"full"}
            gap={1}
            justifyContent={"flex-start"}
          >
            <Image src={assets.ICONS.icon_home} alt="dashboard" boxSize={5} />
          </Button>
        )}
      </NavLink>
      <NavLink to={"/about"}>
        {({ isActive }) => (
          <Button
            variant={isActive ? "solid" : "ghost"}
            w={"full"}
            gap={1}
            justifyContent={"flex-start"}
          >
            <Image src={assets.ICONS.icon_ticket} alt="dashboard" boxSize={5} />
          </Button>
        )}
      </NavLink>
      <NavLink to={"/about"}>
        {({ isActive }) => (
          <Button
            variant={isActive ? "solid" : "ghost"}
            w={"full"}
            gap={1}
            justifyContent={"flex-start"}
          >
            <Image src={assets.ICONS.icon_light} alt="dashboard" boxSize={5} />
          </Button>
        )}
      </NavLink>
      <NavLink to={"/about"}>
        {({ isActive }) => (
          <Button
            variant={isActive ? "solid" : "ghost"}
            w={"full"}
            gap={1}
            justifyContent={"flex-start"}
          >
            <Image src={assets.ICONS.icon_globe} alt="dashboard" boxSize={5} />
          </Button>
        )}
      </NavLink>
    </Flex>
  );
};

export default Appbar;
