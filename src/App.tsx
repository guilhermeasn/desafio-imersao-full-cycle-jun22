import theme from './misc/theme';

import {
    AppBar,
    Box,
    Container,
    ThemeProvider,
    Toolbar,
    Typography
} from '@mui/material';

import {
    BrowserRouter,
    Routes,
    Route
} from 'react-router-dom';

import PostList from './components/PostList';
import PostDetail from './components/PostDetail';

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
                
                <BrowserRouter>
                    <Routes>
                        <Route path='/:post' element={ <PostDetail /> } />
                        <Route path='/' element={ <PostList /> } />
                    </Routes>
                </BrowserRouter>

            </Container>

        </ThemeProvider>

    );

}

