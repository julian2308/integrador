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
          backgroundColor: "transparent !important",


//  main: "#272727",
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

theme.typography.h3 = {
     '@media (min-width:600px)': {
    fontSize: '2.5rem',
  },
}
theme.typography.h4 = {
     '@media (min-width:600px)': {
    fontSize: '1.9rem',
    fontWeight:'700'
  },
}

theme.typography.body2 = {
     '@media (min-width:600px)': {
    fontSize: '1.4rem',
 
  },
}

