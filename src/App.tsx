import { AppBar, Box, Container, ThemeProvider, Toolbar, Typography } from "@mui/material";
import theme from './misc/theme';

export default function App() {

    return (
        
        <ThemeProvider theme={ theme }>

            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            Desafio Imersão Full Cycle
                        </Typography>
                    </Toolbar>
                </AppBar>
            </Box>

            <Container sx={{ marginY: 3 }}>
                
            </Container>

        </ThemeProvider>

    );

}

