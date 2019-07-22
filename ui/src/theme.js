import { createMuiTheme } from "@material-ui/core/styles";

const DARK_GREY_MAIN = "#4F6C92";
const DARK_GREY_SECONDARY = "#A4B8D3";
const LIGHT_GREY_MAIN = "#CBD2E1";
const DARK_BLUE = "#004FB4";
const WHITE = "#F7F8FB";
const DARK_GREEN_MAIN = "#16A64D";
const DARK_GREEN_SECONDARY = "#55CB82";
const LIGHT_GREEN_MAIN = "#CAEFD8";
const PINK_MAIN = "#E2006A";
const PINK_SECONDARY = "#FE93B3";
const LIGHT_PINK_MAIN = "#EED2DF";

const createTheme = isLightTheme => {
  return {
    palette: {
      type: isLightTheme ? "light" : "dark",
      background: {
        default: "#F1F4F8"
      },
      darkGrayMain: DARK_GREY_MAIN,
      darkGraySecondary: DARK_GREY_SECONDARY,
      lightGreyMain: LIGHT_GREY_MAIN,
      pinkMain: PINK_MAIN,
      white: WHITE
    },
    text: {
      activeTabColor: DARK_BLUE,
      inactiveTabColor: LIGHT_GREY_MAIN,
      activeCancelButton: PINK_MAIN,
      disableCancelButton: PINK_SECONDARY,
      activeBookButton: DARK_GREEN_MAIN,
      disableBookButton: DARK_GREEN_SECONDARY
    },
    border: {
      activeCancelButton: PINK_SECONDARY,
      disableCancelButton: LIGHT_PINK_MAIN,
      activeBookButton: DARK_GREEN_SECONDARY,
      disableBookButton: LIGHT_GREEN_MAIN
    }
  };
};

const lightTheme = createMuiTheme(createTheme(true));

export default {
  lightTheme
};
