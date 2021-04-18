import { createMuiTheme } from "@material-ui/core";

const getTheme = theme => {
  return createMuiTheme({
    typography: {
      fontFamily: ['"Lato"', 'sans-serif'].join(',')
    },
    palette: {
      type: theme.paletteType,
      background: {
        default: "#fff"
      }
    },
    overrides: {
      MuiAppBar: {
        colorPrimary: {
          backgroundColor: "#fff",
          color: "#4F4F4F",
        }
      },
      MuiDrawer: {
        paper: {
          backgroundColor: "#ED1260",
          "& *": {
            color: "#fff",
          }
        }
      }
    }
  });
};

export default getTheme;
