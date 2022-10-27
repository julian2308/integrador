import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#C1FD35",
    },
    secondary: {
      main: "#CECECE",
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

//  main: "#272727",