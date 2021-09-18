import React from 'react';
import { Redirect } from 'react-router';
import ReactPlayer from 'react-player';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import workList from '../data/workList';
import PDFViewer from '../utils/PDFViewer';
import withMediaQuery from '../utils/withMediaQuery';

const WorkDetails = (props) => {
  const { classes, match, isDesktop, setTopBarValue } = props;
  setTopBarValue(1);

  const currentWork = workList.find((item) => item.link === match.params.id);
  if (!currentWork) return <Redirect to="/" />;

  const { isComingSoon, name, title, tags, description, logo, images, video, pdf } = currentWork;
  const tagString = tags.join(' | ');

  if (isComingSoon)
    return (
      <Grid className={classes.comingSoonContainer} container>
        <Typography>{`${name} is still in the works! Please enjoy the other parts of my content first!`}</Typography>
      </Grid>
    );

  return (
    <Grid className={classes.mainContainer} container>
      {!isDesktop && (
        <Grid className={classes.logoContainer} item lg={4} md={12} sm={12} xs={12}>
          <img className={classes.logo} src={logo} alt="" />
        </Grid>
      )}
      <Grid className={classes.mainTextContainer} item lg md={12} sm={12} xs={12}>
        <Typography className={classes.titleText}>{title}</Typography>
        <Typography className={classes.tagText}>{tagString}</Typography>
        <Typography className={classes.descriptionText} variant="body2">
          {description}
        </Typography>
      </Grid>
      {isDesktop && (
        <Grid className={classes.logoContainer} item lg={4} md={12} sm={12} xs={12}>
          <img className={classes.logo} src={logo} alt="" />
        </Grid>
      )}
      {false ||
        (pdf && (
          <Grid className={classes.contentContainer} item lg={12} md={12} sm={12} xs={12}>
            <Typography id="pdf-title" className={classes.contentTitle}>
              Below is a PDF sample of {name}:
            </Typography>
            <PDFViewer url={`pdfs/${pdf}`} />
          </Grid>
        ))}
      {video && (
        <Grid className={classes.contentContainer} item lg={12} md={12} sm={12} xs={12}>
          <Typography className={classes.contentTitle}>
            Below is a short video made for {name}:
          </Typography>
          <Grid className={classes.videoPlayer} item>
            <ReactPlayer
              url={`videos/${video}`}
              volume={0}
              width="100%"
              height="auto"
              muted="false"
              controls
              playing
              loop
            />
          </Grid>
        </Grid>
      )}
      {images.length > 0 && (
        <Grid className={classes.contentContainer} item lg={12} md={12} sm={12} xs={12}>
          <Typography className={classes.contentTitle}>
            Below is the artwork designed for {name}:
          </Typography>
          <Grid className={classes.designs} item>
            {images.map((image) => (
              <img className={classes.image} src={image} alt="" />
            ))}
          </Grid>
        </Grid>
      )}
    </Grid>
  );
};

const styles = (theme) => ({
  comingSoonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainContainer: {
    marginTop: 96,
    padding: '40px 80px',
    height: window.innerHeight - 96,
    overflowY: 'scroll',
    [theme.breakpoints.down('md')]: {
      alignItems: 'center',
      justifyContent: 'center',
    },
    [theme.breakpoints.down('xs')]: {
      padding: 8,
    },
  },
  logoContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    borderRadius: '50%',
    width: '20vw',
    [theme.breakpoints.down('md')]: {
      width: '45vw',
    },
  },
  mainTextContainer: {
    paddingRight: 40,
    [theme.breakpoints.down('md')]: {
      padding: 0,
      margin: '16px 0px',
      textAlign: 'center',
      alignItems: 'center',
      justifyContent: 'center',
    },
  },
  titleText: {
    fontSize: 48,
    [theme.breakpoints.down('md')]: {
      lineHeight: 1,
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: 24,
    },
  },
  tagText: {
    fontSize: 24,
    [theme.breakpoints.down('md')]: {
      marginBottom: 8,
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: 12,
    },
  },
  descriptionText: {
    display: 'inline-block',
    fontSize: 16,
    [theme.breakpoints.down('md')]: {
      padding: '0px 80px',
    },
    [theme.breakpoints.down('xs')]: {
      padding: '0px 24px',
      fontSize: 12,
    },
  },
  contentContainer: {
    marginTop: 16,
    width: '100%',
    [theme.breakpoints.down('md')]: {
      display: 'flex',
      flexDirection: 'column',
      textAlign: 'center',
      alignItems: 'center',
      justifyContent: 'center',
    },
  },
  contentTitle: {
    width: '100%',
    fontSize: 20,
    [theme.breakpoints.down('xs')]: {
      fontSize: 12,
    },
  },
  videoPlayer: {
    width: '100%',
  },
  designs: {
    width: '100%',
  },
  image: {
    width: '100%',
  },
});

export default withStyles(styles)(withMediaQuery(WorkDetails));
