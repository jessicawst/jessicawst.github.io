import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { ReactComponent as ShuLogo } from '../assets/shuLogo.svg';

function TopBar() {
	const [value, setValue] = React.useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};
	return (
		<AppBar
			style={{ flexDirection: 'row', boxShadow: 'none' }}
			position="static"
		>
			<ShuLogo style={{ margin: 8, height: 32, width: 32 }} />
			<Tabs value={value} onChange={handleChange}>
				<Tab label="About Me" />
				<Tab label="My Work" />
				<Tab label="Contact Me" />
			</Tabs>
		</AppBar>
	);
}

export default TopBar;
