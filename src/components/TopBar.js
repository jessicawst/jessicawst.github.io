import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { Link } from 'react-scroll';
import { ShuLogo } from '../assets';
import {
	SwipeableDrawer,
	Divider,
	List,
	ListItem,
	Typography,
	IconButton,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import withMediaQuery from '../utils/withMediaQuery';
import { useHistory } from 'react-router-dom';

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

const TabLabel = props => (
	<Link
		to={props.to}
		offset={props.offset}
		onClick={props.onClick}
		onSetActive={props.onClick}
		duration={1000}
		spy
		smooth
		ignoreCancelEvents
	>
		<Typography style={{ fontSize: 20, height: '100%', margin: '0px 20px' }}>
			{props.label}
		</Typography>
	</Link>
);

const SwipeableDrawerList = props => (
	<List style={{ width: '100%' }}>
		<ListItem style={{ justifyContent: 'center' }}>
			<Link
				to="aboutLink"
				offset={-96}
				duration={1000}
				onClick={() => props.closeSwipeableDrawer()}
			>
				<Typography style={{ fontSize: 20 }}>ABOUT ME</Typography>
			</Link>
		</ListItem>
		<Divider style={{ borderWidth: 1, backgroundColor: 'black' }} />
		<ListItem style={{ justifyContent: 'center' }}>
			<Link
				to="workLink"
				duration={1000}
				onClick={() => props.closeSwipeableDrawer()}
			>
				<Typography style={{ fontSize: 20 }}>MY WORK</Typography>
			</Link>
		</ListItem>
		<Divider style={{ borderWidth: 1, backgroundColor: 'black' }} />
		<ListItem style={{ justifyContent: 'center' }}>
			<Link
				to="contactLink"
				offset={-56}
				duration={1000}
				onClick={() => props.closeSwipeableDrawer()}
			>
				<Typography style={{ fontSize: 20 }}>CONTACT ME</Typography>
			</Link>
		</ListItem>
	</List>
);

const DesktopBar = props => {
	const { classes, isDesktop, value, setValue } = props;
	const history = useHistory();

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	return (
		<AppBar className={classes.mainContainer} position="fixed">
			<ShuLogo className={classes.mainLogo} />
			<StyledTabs
				className={classes.tabContainer}
				value={value}
				onChange={handleChange}
				variant={isDesktop ? 'standard' : 'fullWidth'}
			>
				<Tab
					label={
						<TabLabel
							to="aboutLink"
							label="ABOUT ME"
							offset={-96}
							onClick={() => {
								history.push('/');
								setValue(0);
							}}
						/>
					}
				/>
				<Tab
					label={
						<TabLabel
							to="workLink"
							label="MY WORK"
							onClick={() => {
								history.push('/');
								setValue(1);
							}}
						/>
					}
				/>
				<Tab
					label={
						<TabLabel
							to="contactLink"
							label="CONTACT ME"
							offset={-56}
							onClick={() => {
								history.push('/');
								setValue(2);
							}}
						/>
					}
				/>
			</StyledTabs>
		</AppBar>
	);
};

const MobileBar = props => {
	const { classes } = props;
	const [isOpen, setIsOpen] = React.useState(false);

	const openSwipeableDrawer = () => {
		setIsOpen(true);
	};

	const closeSwipeableDrawer = () => {
		setIsOpen(false);
	};

	return (
		<AppBar
			className={classes.mainContainer}
			style={{ justifyContent: 'space-between' }}
			position="fixed"
		>
			<ShuLogo className={classes.mainLogo} />
			<IconButton onClick={openSwipeableDrawer}>
				<MenuIcon className={classes.drawerIcon} />
			</IconButton>
			<SwipeableDrawer
				classes={{ paper: classes.drawerContainer }}
				anchor="top"
				open={isOpen}
				onOpen={openSwipeableDrawer}
				onClose={closeSwipeableDrawer}
			>
				<SwipeableDrawerList
					closeSwipeableDrawer={() => closeSwipeableDrawer()}
				/>
			</SwipeableDrawer>
		</AppBar>
	);
};

function TopBar(props) {
	const { isMobile } = props;

	return isMobile ? <MobileBar {...props} /> : <DesktopBar {...props} />;
}

const styles = theme => ({
	mainContainer: {
		flexDirection: 'row',
		boxShadow: 'none',
		height: 96,
	},
	mainLogo: {
		margin: 16,
		width: 64,
	},
	tabContainer: {
		width: '100%',
		height: '100%',
	},
	drawerIcon: {
		fill: 'white',
		margin: 16,
		width: 64,
		height: 64,
	},
	drawerContainer: {
		padding: '0 10vw',
		backgroundColor: theme.palette.primary.main,
		alignItems: 'center',
	},
});

export default withStyles(styles)(withMediaQuery(TopBar));
