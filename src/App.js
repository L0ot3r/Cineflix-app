import React from 'react';
import {
	Container,
	createTheme,
	CssBaseline,
	ThemeProvider,
} from '@mui/material';
import ListMovies from './components/Movies/ListMovies';
import Navbar from './components/Navbar/Navbar';

const theme = createTheme({});

function App() {
	return (
		<>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<Navbar />
				<Container>
					<ListMovies />
				</Container>
			</ThemeProvider>
		</>
	);
}

export default App;
