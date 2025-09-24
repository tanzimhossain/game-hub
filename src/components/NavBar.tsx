import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.png";

const NavBar = () => {
  return (
    <HStack>
      <Image src={logo} alt="logo" height="50px" objectFit="contain" />
      <Text fontSize="xl" fontWeight="bold">
        GameHub
      </Text>
    </HStack>
  );
};

export default NavBar;
