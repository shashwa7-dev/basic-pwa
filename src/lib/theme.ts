// 1. import `extendTheme` function
import { extendTheme, type ThemeConfig } from "@chakra-ui/react";

// 2. Add your color mode config
const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};
const fonts = {
  heading: `var(--heading-font)`,
  body: `var(--body-font)`,
};
const styles = {
  global: {
    // styles for the `body`
    body: () => ({
      bg: colors.brand.black,
      color: colors.brand.white,
    }),
  },
};
// const components = {
//   Button: {
//     variants: {
//       // 4. We can override existing variants
//       base: (props: StyleFunctionProps) => ({
//         bg: colors.brand.black700,
//         color: colors.brand.secondary,
//         _hover: {
//           opacity: 0.9,
//           _disabled: {
//             background: colors.brand.grey500,
//           },
//         },
//       }),
//       secondary: (props: StyleFunctionProps) => ({
//         bg: colors.brand.white,
//         color: colors.brand.grey700,
//         border: `1px solid ${colors.brand.grey300}`,
//         _hover: {
//           opacity: 0.9,
//           _disabled: {
//             background: colors.brand.white700,
//           },
//         },
//       }),
//     },
//     defaultProps: {
//       // Then here we set the base variant as the default
//       variant: "base",
//     },
//   },
//   Tabs: {
//     variants: {
//       line: (props: StyleFunctionProps) => ({
//         paddingY: "4",
//         marging: "0",
//         tab: {
//           color: colors.brand.grey500,
//           fontWeight: "semibold",
//           _selected: {
//             color: colors.brand.black700,
//             borderBottom: `2px solid ${colors.brand.black700}`,
//           },
//         },
//       }),
//     },
//   },
//   Progress: {
//     baseStyle: {
//       filledTrack: {
//         bg: "brand.green700",
//       },
//     },
//   },
// };
const colors = {
  brand: {
    primary: "rgba(22, 22, 22, 1)",
    secondary: "rgba(0, 0, 0, 1)",
    white: " rgba(255, 255, 255, 1)",
    white700: "#F6F7FA",
    grey700: "rgba(70, 70, 70, 1)",
    green700: "rgba(205, 255, 73, 1)",
    green100: "rgba(205, 255, 73, 0.1)",
    greenGradient: "linear-gradient(49deg, #C5E548 0%, #F0FFB8 100%)",
    black: "rgba(0, 0, 0, 1)",
    black700: "rgba(34, 34, 34, 1)",
  },
};
// 3. extend the theme
const theme = extendTheme({ config, styles, colors, fonts });

export default theme;
