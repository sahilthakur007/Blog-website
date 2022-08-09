import { createTheme } from "@mui/material";
export const customTheme= createTheme({
    palette:{
        myColor: {
            main:"#ff9100"
          //  main:"#ff8f66"
        },
        transparent:{
            main:"#1fef"
        },
        white:{
            main:"#fff"
        },
        btn:{
            main:"rgb(41, 41, 41)",
            contrastText: "#fff"
        },
        black:{
            main:"#000"
        }
    }
})