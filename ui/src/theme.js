import { createMuiTheme } from "@material-ui/core/styles";

const createTheme = isLightTheme => {
  return {
    palette: {
      type: isLightTheme ? "light" : "dark",
      background: {
        default: "#F1F4F8"
      }
    },
    text: {
      activeTabColor: "#004FB4",
      inactiveTabColor: "#CBD2E1"
    }
  };
};

const lightTheme = createMuiTheme(createTheme(true));

export default {
  lightTheme
};
