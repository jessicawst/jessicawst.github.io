import React from 'react';
import { useHistory } from 'react-router-dom';
import { goToAnchor } from 'react-scrollable-anchor';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import ButtonBase from '@material-ui/core/ButtonBase';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import withMediaQuery from '../utils/withMediaQuery';
import { ShuLogo } from '../assets';

const navigateToAnchor = (id) => goToAnchor(id, true);

const StyledTabs = withStyles((theme) => ({
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
}))((props) => <Tabs {...props} TabIndicatorProps={{ children: <span /> }} />);

const SwipeableDrawerList = (props) => (
  <List style={{ width: '100%' }}>
    <ListItem style={{ justifyContent: 'center' }}>
      <ButtonBase onClick={() => navigateToAnchor('about')}>
        <Typography style={{ fontSize: 20 }}>ABOUT ME</Typography>
      </ButtonBase>
    </ListItem>
    <Divider style={{ borderWidth: 1, backgroundColor: 'black' }} />
    <ListItem style={{ justifyContent: 'center' }}>
      <ButtonBase onClick={() => navigateToAnchor('work')}>
        <Typography style={{ fontSize: 20 }}>MY WORK</Typography>
      </ButtonBase>
    </ListItem>
    <Divider style={{ borderWidth: 1, backgroundColor: 'black' }} />
    <ListItem style={{ justifyContent: 'center' }}>
      <ButtonBase onClick={() => navigateToAnchor('contact')}>
        <Typography style={{ fontSize: 20 }}>CONTACT ME</Typography>
      </ButtonBase>
    </ListItem>
  </List>
);

const DesktopBar = (props) => {
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
            <Typography
              style={{
                fontSize: 20,
                height: '100%',
                margin: '0px 20px',
              }}
            >
              ABOUT ME
            </Typography>
          }
          onClick={() => {
            history.push('/');
            navigateToAnchor('about');
          }}
        />
        <Tab
          label={
            <Typography
              style={{
                fontSize: 20,
                height: '100%',
                margin: '0px 20px',
              }}
            >
              MY WORK
            </Typography>
          }
          onClick={() => {
            history.push('/');
            navigateToAnchor('work');
          }}
        />
        <Tab
          label={
            <Typography
              style={{
                fontSize: 20,
                height: '100%',
                margin: '0px 20px',
              }}
            >
              CONTACT ME
            </Typography>
          }
          onClick={() => {
            history.push('/');
            navigateToAnchor('contact');
          }}
        />
      </StyledTabs>
    </AppBar>
  );
};

const MobileBar = (props) => {
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
        <SwipeableDrawerList closeSwipeableDrawer={() => closeSwipeableDrawer()} />
      </SwipeableDrawer>
    </AppBar>
  );
};

function TopBar(props) {
  const { isMobile } = props;

  return isMobile ? <MobileBar {...props} /> : <DesktopBar {...props} />;
}

const styles = (theme) => ({
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
