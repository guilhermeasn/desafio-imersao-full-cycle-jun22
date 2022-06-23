import { createTheme } from "@mui/material";
import { deepPurple, blue } from "@mui/material/colors";

export default createTheme({
    palette: {
        primary: deepPurple,
        secondary: blue,
    },
    components: {
        MuiButton: {
            defaultProps: {
                sx: { marginTop: 2 },
                variant: 'contained',
                color: 'secondary',
                fullWidth: true
            }
        }
    }
}) ;
