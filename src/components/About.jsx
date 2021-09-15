import React from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import withMediaQuery from '../utils/withMediaQuery';
import { AboutCurve, ZigZag, HeartWithDashes, Logo, SelfPortrait, ResumePhoto } from '../assets';

class About extends React.Component {
  downloadResume() {
    const link = document.createElement('a');
    link.download = `Shuting_Resume.pdf`;
    link.href = 'pdfs/Shuting_Resume.pdf';
    link.click();
  }

  render() {
    const { classes, isDesktop } = this.props;

    return (
      <ScrollableAnchor id="about">
        <div className={classes.mainContainer}>
          <Grid container>
            {isDesktop ? (
              <Grid
                className={classes.introCardContainer}
                container
                item
                lg={6}
                direction="column"
                justifyContent="center"
                alignItems="center"
              >
                <HeartWithDashes className={classes.introCardHeart} />
                <Grid className={classes.introCardTextContainer}>
                  <Typography className={classes.introCardTopText}>
                    I'm <Logo className={classes.introCardLogo} /> -
                  </Typography>
                  <Typography className={classes.introCardBottomText}>
                    UI/UX + Graphic Designer
                  </Typography>
                </Grid>
              </Grid>
            ) : (
              ''
            )}
            <Grid
              className={classes.selfPortraitContainer}
              container
              item
              lg={6}
              md={12}
              sm={12}
              xs={12}
              justifyContent="center"
              alignItems="center"
            >
              <SelfPortrait className={classes.selfPortrait} />
            </Grid>
            <Grid item lg={12} md={12} sm={12} xs={12}>
              <AboutCurve className={classes.aboutCurve} />
            </Grid>

            {isDesktop ? (
              <Grid
                className={classes.resumePhotoContainer}
                container
                item
                lg={6}
                justifyContent="center"
                alignItems="center"
              >
                <ResumePhoto className={classes.resumePhoto} />
              </Grid>
            ) : (
              ''
            )}
            {!isDesktop ? (
              <Grid
                className={classes.introCardContainer}
                container
                item
                lg={6}
                md={12}
                sm={12}
                xs={12}
                direction="column"
                justifyContent="center"
                alignItems="center"
              >
                <Grid className={classes.introCardTextContainer}>
                  <Typography className={classes.introCardTopText}>
                    I'm <Logo className={classes.introCardLogo} /> -
                  </Typography>
                  <Typography className={classes.introCardBottomText}>
                    UI/UX + Graphic Designer
                  </Typography>
                </Grid>
              </Grid>
            ) : (
              ''
            )}
            <Grid
              className={classes.resumeContainer}
              container
              item
              lg={6}
              md={12}
              sm={12}
              xs={12}
              direction="column"
              justifyContent="center"
            >
              <Grid
                className={classes.helloContainer}
                container
                alignItems="flex-end"
                justifyContent={!isDesktop ? 'center' : 'flex-start'}
              >
                <Grid
                  className={classes.helloFlavor}
                  container
                  alignContent="flex-end"
                  justifyContent="flex-start"
                >
                  <Typography className={classes.helloText}>HELLO!</Typography>
                </Grid>
                <ZigZag className={classes.helloZigZag} />
              </Grid>
              <Grid className={classes.resumeTextContainer}>
                <Typography className={classes.resumeText} variant="body2">
                  I am an UX/UI + Graphic Designer. Possessing the ability to lead and the
                  willingness to be led, I am a team player who can also work well individually.
                </Typography>
                <Typography className={classes.resumeText} variant="body2">
                  I am an individual driven to accomplish, to the best of my ability, the tasks
                  given to me. Beyond my personal tasks, I would assist my peers and colleagues
                  whenever I can. As someone who is adventurous and loves to be challenged, I
                  believe that passion and hard work is the key to success.
                </Typography>
                <Typography className={classes.resumeText} variant="body2">
                  A designer that seeks to satisfy your needs and translate your wildest dreams into
                  reality.
                </Typography>
                <Typography className={classes.resumeEmphasisText} variant="body2">
                  If you can dream it, I can design it!
                </Typography>
              </Grid>
              <Grid className={classes.resumeButtonContainer}>
                <Button
                  className={classes.resumeButton}
                  variant="contained"
                  color="secondary"
                  onClick={this.downloadResume}
                >
                  <Typography className={classes.resumeButtonText}>Download Resume</Typography>
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </div>
      </ScrollableAnchor>
    );
  }
}

const styles = (theme) => ({
  mainContainer: {
    width: '100%',
    paddingTop: 96,
  },
  introCardContainer: {
    [theme.breakpoints.up('lg')]: {
      backgroundColor: theme.palette.primary.main,
    },
  },
  introCardHeart: {
    width: '60vw',
    zIndex: 1,
  },
  introCardTextContainer: {
    zIndex: 2,
    [theme.breakpoints.down('md')]: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      marginBottom: 40,
    },
    [theme.breakpoints.down('xs')]: {
      marginBottom: 20,
    },
    [theme.breakpoints.up('lg')]: {
      position: 'absolute',
    },
  },
  introCardTopText: {
    display: 'flex',
    alignItems: 'center',
    marginLeft: 10,
    marginBottom: 12,
    [theme.breakpoints.down('md')]: {
      fontSize: 56,
      marginBottom: 8,
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: 32,
      marginBottom: 0,
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: 48,
    },
  },
  introCardLogo: {
    margin: '0px 16px',
    [theme.breakpoints.down('xs')]: {
      width: 112,
      margin: '0px 8px',
    },
    [theme.breakpoints.up('sm')]: {
      width: 208,
    },
  },
  introCardBottomText: {
    backgroundColor: theme.palette.accent.main,
    padding: '8px 28px',
    fontSize: 26,
    [theme.breakpoints.down('xs')]: {
      fontSize: 12,
      padding: '4px 16px',
    },
  },
  selfPortraitContainer: {
    backgroundColor: theme.palette.primary.main,
  },
  selfPortrait: {
    width: '80%',
    marginBottom: -64,
    zIndex: 10,
    [theme.breakpoints.between('md', 'sm')]: {
      width: '60%',
    },
    [theme.breakpoints.down('sm')]: {
      marginBottom: -48,
    },
    [theme.breakpoints.down('xs')]: {
      width: '65%',
      marginBottom: -24,
    },
  },
  aboutCurve: {
    width: '100%',
  },
  resumePhotoContainer: {
    padding: '0px 80px',
    marginBottom: -32,
  },
  resumePhoto: {
    width: '100%',
  },
  resumeContainer: {
    [theme.breakpoints.up('lg')]: {
      paddingRight: 100,
    },
  },
  helloContainer: {
    marginBottom: 16,
  },
  helloFlavor: {
    width: 165,
    height: 6,
    backgroundColor: theme.palette.accent.main,
    marginRight: 16,
    [theme.breakpoints.down('md')]: {
      width: 208,
    },
    [theme.breakpoints.down('xs')]: {
      width: '35%',
      marginRight: 8,
    },
  },
  helloText: {
    fontSize: 45,
    lineHeight: 0.8,
    [theme.breakpoints.down('md')]: {
      fontSize: 56,
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: 32,
    },
  },
  helloZigZag: {
    [theme.breakpoints.down('xs')]: {
      width: '30%',
    },
  },
  resumeTextContainer: {
    paddingRight: 56,
    [theme.breakpoints.down('md')]: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
      padding: '0px 160px',
    },
    [theme.breakpoints.down('xs')]: {
      padding: '0px 16px',
    },
  },
  resumeText: {
    marginBottom: 8,
    [theme.breakpoints.down('md')]: {
      fontSize: 18,
      lineHeight: 1.2,
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: 14,
      lineHeight: 1.2,
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: 14,
    },
  },
  resumeEmphasisText: {
    [theme.breakpoints.down('md')]: {
      fontSize: 24,
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: 18,
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: 18,
    },
  },
  resumeButtonContainer: {
    [theme.breakpoints.down('md')]: {
      display: 'flex',
      justifyContent: 'center',
    },
  },
  resumeButton: {
    backgroundColor: theme.palette.text.main,
    boxShadow: 'none',
    borderRadius: 8,
    marginTop: 16,
    [theme.breakpoints.down('md')]: {
      height: 56,
      width: 214,
    },
    [theme.breakpoints.down('xs')]: {
      height: 'auto',
      width: 'auto',
    },
  },
  resumeButtonText: {
    color: 'white',
    textTransform: 'capitalize',
    [theme.breakpoints.down('md')]: {
      fontSize: 20,
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: 14,
    },
  },
});

export default withStyles(styles)(withMediaQuery(About));
