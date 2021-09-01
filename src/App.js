import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import ProximaSoftBlack from './fonts/ProximaSoft-Black.woff2';
import ProximaSoftBold from './fonts/ProximaSoft-Bold.woff2';
import ProximaSoftRegular from './fonts/ProximaSoft-Regular.woff2';
import ProximaSoftMedium from './fonts/ProximaSoft-Medium.woff2';
import TopBar from './components/TopBar';
import About from './components/About';
import Work from './components/Work';
import Contact from './components/Contact';

const proximaSoftRegular = {
	fontFamily: 'ProximaSoft-Regular',
	src: `
  local('ProximaSoft'),
  local('ProximaSoft-Regular'),
  url(${ProximaSoftRegular}) format('woff2')`,
	unicodeRange:
		'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF',
};

const proximaSoftBlack = {
	fontFamily: 'ProximaSoft-Black',
	src: `
  local('ProximaSoft'),
  local('ProximaSoft-Black'),
  url(${ProximaSoftBlack}) format('woff2')`,
	unicodeRange:
		'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF',
};

const proximaSoftBold = {
	fontFamily: 'ProximaSoft-Bold',
	src: `
  local('ProximaSoft'),
  local('ProximaSoft-Bold'),
  url(${ProximaSoftBold}) format('woff2')`,
	unicodeRange:
		'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF',
};

const proximaSoftMedium = {
	fontFamily: 'ProximaSoft-Medium',
	src: `
  local('ProximaSoft'),
  local('ProximaSoft-Medium'),
  url(${ProximaSoftMedium}) format('woff2')`,
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
		accent: {
			main: '#FAF5B0',
			contrastText: '#3D3334',
		},
		text: {
			main: '#3D3334',
		},
		tonalOffset: 0,
	},
	typography: {
		fontFamily: [
			'ProximaSoft-Regular',
			'ProximaSoft-Black',
			'ProximaSoft-Bold',
		].join(','),
		body1: {
			fontFamily: 'ProximaSoft-Bold',
			color: '#3D3334',
		},
		body2: {
			fontFamily: 'ProximaSoft-Medium',
			color: '#3D3334',
		},
	},
	overrides: {
		MuiCssBaseline: {
			'@global': {
				'@font-face': [
					proximaSoftRegular,
					proximaSoftBlack,
					proximaSoftBold,
					proximaSoftMedium,
				],
			},
		},
	},
	breakpoints: {
		values: {
			xs: 0,
			sm: 321, // Mobile
			md: 769, // Tablet
			lg: 1201, // Web
			xl: 1920,
		},
	},
});

function App() {
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<TopBar />
			<div>
				<About />
				<Work />
				<Contact />
			</div>
		</ThemeProvider>
	);
}

export default App;
