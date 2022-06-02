import { createTheme } from "@mui/material";

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#000000'
    },
    primary: {
      main: '#4a148c'
    },
    secondary: {
      main: '#FFFFFF'
    },
    error: {
      main: '#DD0909'
    },

    components: {
      MuiAppBar: {
        defaultProps: {},
        styleOverrides: {
          root: {
            backgroundColor: '#4a148c'
          }
        }
      }
    }
  }
});
