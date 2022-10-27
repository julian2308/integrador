import { createTheme } from "@mui/material";

// declare module "@mui/material/TextField" {
//   interface TextFieldPropsVariantOverrides {
//     cardProduct: true;
//   }
// }

export const theme = createTheme({
  palette: {
    primary: {
      main: "#C1FD35",
    },
    secondary: {
      main: "#CECECE",
    },
  },
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          color: "#fff",

          //
          "& .MuiOutlinedInput-notchedOutline:hover": {
            borderWidth: 1,
            borderColor: "#ffffff",
          },
          "&:hover $notchedOutline": {
            borderColor: "#fff",
          },
          "&:hover": {
            borderColor: "#fff",
          },
          //
        },

        notchedOutline: {
          borderColor: "#fff",
          color: "#fff",
          //
          "&:hover": {
            borderColor: "#fff",
          },
          //
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        outlined: {
          // "&$focused": {
          color: "#fff",
          // },
        },
      },
    },
  },
});
