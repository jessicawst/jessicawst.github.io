import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import ProximaSoftBlack from './fonts/ProximaSoft-Black.woff2';
import ProximaSoftBold from './fonts/ProximaSoft-Bold.woff2';
import ProximaSoftRegular from './fonts/ProximaSoft-Regular.woff2';
import TopBar from './components/TopBar';

const proximaSoft = {
	fontFamily: 'ProximaSoft',
	src: `
  local('ProximaSoft'),
  local('ProximaSoft-Regular'),
  url(${ProximaSoftRegular}) format('woff2')`,
};

const proximaSoftBlack = {
	fontFamily: 'ProximaSoft',
	src: `
  local('ProximaSoft'),
  local('ProximaSoft-Black'),
  url(${ProximaSoftBlack}) format('woff2')`,
};

const proximaSoftBold = {
	fontFamily: 'ProximaSoft',
	src: `
  local('ProximaSoft'),
  local('ProximaSoft-Bold'),
  url(${ProximaSoftBold}) format('woff2')`,
};

const theme = createTheme({
	palette: {
		primary: {
			main: '#FFD8D3',
			contrastText: '#3D3334',
		},
		secondary: {
			main: '#E57075',
			contrastText: '#FFFFFF',
		},
		offWhite: {
			main: '#F7F7F7',
			contrastText: '#3D3334',
		},
		accent: {
			main: '#F2C961',
			contrastText: '#3D3334',
		},
		tonalOffset: 0,
	},
	typography: {
		fontFamily: [
			'ProximaSoft',
			'-apple-system',
			'BlinkMacSystemFont',
			'"Segoe UI"',
			'Roboto',
			'"Helvetica Neue"',
			'Arial',
			'sans-serif',
			'"Apple Color Emoji"',
			'"Segoe UI Emoji"',
			'"Segoe UI Symbol"',
		].join(','),
	},
	overrides: {
		MuiCssBaseline: {
			'@global': {
				'@font-face': [proximaSoft, proximaSoftBlack, proximaSoftBold],
			},
		},
	},
});

function App() {
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<div style={{ backgroundColor: '#FFD8D3', height: '100vh' }}>
				<TopBar />
				<div className="App">
					<header className="App-header">
						<p>
							Edit <code>src/App.js</code> and save to reload.
						</p>
						<a
							className="App-link"
							href="https://reactjs.org"
							target="_blank"
							rel="noopener noreferrer"
						>
							Learn React
						</a>
					</header>
				</div>
			</div>
		</ThemeProvider>
	);
}

export default App;
