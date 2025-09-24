import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.png";
import ColorModeSwitch from "./ColorModeSwitch";

const NavBar = () => {
  return (
    <HStack justifyContent={"space-between"} padding="15px">
      <Image src={logo} alt="logo" height="40px" objectFit="contain" />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
