import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import ProximaSoftBlack from './fonts/ProximaSoft-Black.woff2';
import ProximaSoftBold from './fonts/ProximaSoft-Bold.woff2';
import ProximaSoftRegular from './fonts/ProximaSoft-Regular.woff2';
import TopBar from './components/TopBar';
import About from './components/About';
import Work from './components/Work';
import Contact from './components/Contact';

const proximaSoft = {
	fontFamily: 'ProximaSoft',
	src: `
  local('ProximaSoft'),
  local('ProximaSoft-Regular'),
  url(${ProximaSoftRegular}) format('woff2')`,
	unicodeRange:
		'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF',
};

const proximaSoftBlack = {
	fontFamily: 'ProximaSoft',
	src: `
  local('ProximaSoft'),
  local('ProximaSoft-Black'),
  url(${ProximaSoftBlack}) format('woff2')`,
	unicodeRange:
		'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF',
};

const proximaSoftBold = {
	fontFamily: 'ProximaSoft',
	src: `
  local('ProximaSoft'),
  local('ProximaSoft-Bold'),
  url(${ProximaSoftBold}) format('woff2')`,
	unicodeRange:
		'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF',
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
			main: '#FAF5B0',
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
	breakpoints: {
		values: {
			xs: 0,
			sm: 320, // Mobile
			md: 768, // Tablet
			lg: 1200, // Web
			xl: 1920,
		},
	},
});

function App() {
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<div style={{ backgroundColor: 'white', height: '100vh' }}>
				<TopBar />
				<div style={{ marginTop: 48 }}>
					<About />
					<Work />
					<Contact />
				</div>
			</div>
		</ThemeProvider>
	);
}

export default App;
