import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { ShuLogo } from '../assets';
import { Typography } from '@material-ui/core';
import withMediaQuery from '../utils/withMediaQuery';

const tabIndicatorWidths = [96, 96, 100];

const StyledTabs = withStyles(theme => ({
	flexContainer: {
		height: '100%',
	},
	indicator: {
		display: 'flex',
		justifyContent: 'center',
		backgroundColor: 'transparent',
		height: 4,
		bottom: 32,
		'& > span': {
			maxWidth: 100,
			width: '100%',
			backgroundColor: theme.palette.secondary.main,
		},
	},
}))(props => <Tabs {...props} TabIndicatorProps={{ children: <span /> }} />);

const tabLabel = label => (
	<Typography style={{ fontSize: 20, height: '100%', margin: '0px 20px' }}>
		{label}
	</Typography>
);

function TopBar(props) {
	const { isDesktop } = props;
	const [value, setValue] = React.useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};
	return (
		<AppBar
			style={{ flexDirection: 'row', boxShadow: 'none', height: 96 }}
			position="fixed"
		>
			<ShuLogo style={{ margin: 16, width: 64 }} />
			<StyledTabs
				style={{ height: '100%', width: '100%' }}
				value={value}
				onChange={handleChange}
				variant={isDesktop ? 'standard' : 'fullWidth'}
			>
				<Tab label={tabLabel('ABOUT ME')} />
				<Tab label={tabLabel('MY WORK')} />
				<Tab label={tabLabel('CONTACT ME')} />
			</StyledTabs>
		</AppBar>
	);
}

export default withMediaQuery(TopBar);
