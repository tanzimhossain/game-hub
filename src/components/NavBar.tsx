import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.png";
import ColorModeSwitch from "./ColorModeSwitch";

const NavBar = () => {
  return (
    <HStack>
      <Image src={logo} alt="logo" height="50px" objectFit="contain" />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
