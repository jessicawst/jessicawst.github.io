import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import withMediaQuery from '../utils/withMediaQuery';
import workList from '../data/workList';
import { WorkSlant, Star, LatestWorkStar, ComingSoonStar } from '../assets';

class Work extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <div id="work">
        <div className={classes.mainContainer}>
          <WorkSlant className={classes.topSlant} />
          <Grid
            className={classes.workTitleContainer}
            container
            direction="column"
            alignContent="center"
            justifyContent="center"
          >
            <Typography className={classes.workTitleText}>MY WORK</Typography>
            <Grid className={classes.titleAccent}>
              <Typography className={classes.titleAccentText}>awesome projects</Typography>
              <Star className={classes.star} />
            </Grid>
          </Grid>
          <div className={classes.workContainer}>
            <Grid
              className={classes.workGridContainer}
              container
              lg={12}
              md={12}
              sm={12}
              spacing={2}
              alignItems="center"
            >
              {workList.map((item, index) => (
                <Grid key={index} item lg={4} md={6} sm={6} xs={12}>
                  <Button
                    className={classes.workListItem}
                    to={`${item.link}`}
                    component={Link}
                    disableRipple
                    disableTouchRipple
                    disableFocusRipple
                    disableElevation
                  >
                    <img className={classes.workListItemLogo} src={item.logo} alt="" />
                    {item.isLatest ? <LatestWorkStar className={classes.workListItemStar} /> : ''}
                    {item.isComingSoon ? (
                      <ComingSoonStar className={classes.workListItemStar} />
                    ) : (
                      ''
                    )}
                  </Button>
                </Grid>
              ))}
            </Grid>
          </div>
          <WorkSlant className={classes.bottomSlant} />
        </div>
      </div>
    );
  }
}

const styles = (theme) => ({
  mainContainer: {
    width: '100%',
  },
  topSlant: {
    width: '100%',
  },
  workTitleContainer: {
    height: 80,
    marginTop: -85,
    [theme.breakpoints.down('sm')]: {
      height: 40,
      marginTop: -5,
      backgroundColor: theme.palette.secondary.main + '1A',
    },
  },
  workTitleText: {
    [theme.breakpoints.down('sm')]: {
      fontSize: 36,
    },
    [theme.breakpoints.up('md')]: {
      fontSize: 44,
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: 36,
    },
    lineHeight: 0.75,
  },
  titleAccent: {
    backgroundColor: theme.palette.accent.main,
    height: 10,
    marginLeft: 32,
    [theme.breakpoints.down('md')]: {
      marginLeft: 40,
    },
    [theme.breakpoints.down('sm')]: {
      marginLeft: 32,
    },
  },
  titleAccentText: {
    lineHeight: 1,
    [theme.breakpoints.between('md', 'sm')]: {
      fontSize: 20,
    },
  },
  star: {
    transform: 'translate(128px, -64px)',
    [theme.breakpoints.down('md')]: {
      transform: 'translate(164px, -72px)',
    },
    [theme.breakpoints.down('sm')]: {
      transform: 'translate(128px, -64px)',
    },
  },
  workContainer: {
    backgroundColor: theme.palette.secondary.main + '1A',
    display: 'grid',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 40,
  },
  workGridContainer: {
    [theme.breakpoints.down('xs')]: {
      width: '60vw',
    },
    [theme.breakpoints.up('sm')]: {
      width: 560,
    },
    [theme.breakpoints.up('lg')]: {
      width: 840,
    },
  },
  workListItem: {
    backgroundColor: 'transparent',
    width: 264,
    height: 264,
    borderRadius: 8,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.down('xs')]: {
      width: 'calc(60vw - 16px)',
      height: 'calc(60vw - 16px)',
    },
    '&:hover': {
      backgroundColor: 'transparent',
    },
  },
  workListItemLogo: {
    width: '100%',
    borderRadius: 8,
  },
  workListItemStar: {
    position: 'absolute',
    width: 64,
    alignSelf: 'flex-start',
    transform: 'translate(112px, -32px)',
    [theme.breakpoints.down('xs')]: {
      transform: 'translate(calc(30vw - 8px), -32px)',
    },
  },
  bottomSlant: {
    width: '100%',
    transform: 'rotate(180deg)',
  },
});

export default withStyles(styles)(withMediaQuery(Work));
