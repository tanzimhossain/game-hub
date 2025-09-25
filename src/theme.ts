import { extendTheme, type ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "dark"
};

const theme = extendTheme({
  config,
  colors: {
    gray: {
      50: "#eaf4f8",
      100: "#d3dbdf",
      200: "#b8c2c7",
      300: "#9ca9b1",
      400: "#80919a",
      500: "#677881",
      600: "#4f5d64",
      700: "#394348",
      800: "#20282c",
      900: "#060e14"
    }
  }
});

export default theme;
