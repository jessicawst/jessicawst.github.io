import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import withMediaQuery from '../utils/withMediaQuery';
import { ContactPhotos, FBStar, InstaStar, LinkedinStar, RandomShapes } from '../assets';
import { flavourTextList } from '../data/dataLists';

class Contact extends React.Component {
  render() {
    const { classes, isMobile } = this.props;

    return (
      <div className={classes.mainContainer} id="contact">
        <Grid className={classes.contactContainer} container>
          <Grid className={classes.photoContainer} item lg={6} md={12} sm={12}>
            <RandomShapes className={classes.topShapes} />
            <ContactPhotos className={classes.contactPhotos} />
          </Grid>
          <Grid className={classes.contactTextContainer} item lg={6} md={12} sm={12}>
            <Grid className={classes.contactInfoContainer}>
              <Typography className={classes.contactTitle}>CONTACT ME!</Typography>
              <Typography
                className={classes.contactContent}
                style={{ marginBottom: isMobile ? 8 : 24 }}
                variant="body2"
              >
                {flavourTextList.contactMe}
              </Typography>
              <Typography className={classes.contactContent} component="div" variant="body2">
                Email Address
                <a
                  className={classes.contactLinkContainer}
                  href={`mailto:${flavourTextList.email}`}
                >
                  <Typography className={classes.contactLinks} variant="body2">
                    {flavourTextList.email}
                  </Typography>
                </a>
              </Typography>
              <Typography className={classes.contactContent} component="div" variant="body2">
                Phone Number
                <a
                  className={classes.contactLinkContainer}
                  href={`mailto:${flavourTextList.email}`}
                >
                  <Typography className={classes.contactLinks} variant="body2">
                    {flavourTextList.phoneNo}
                  </Typography>
                </a>
              </Typography>
              <Typography className={classes.contactContent} component="div" variant="body2">
                On Web
                <a className={classes.contactLinkContainer} href={flavourTextList.websiteLink}>
                  <Typography className={classes.contactLinks} variant="body2">
                    {flavourTextList.websiteLink.replace('https://', '').replace('/', '')}
                  </Typography>
                </a>
              </Typography>
              <Typography className={classes.contactContent} component="div" variant="body2">
                Website developed by
                <a className={classes.contactLinkContainer} href={flavourTextList.developerLink}>
                  <Typography className={classes.contactLinks} variant="body2">
                    {flavourTextList.developerLink.replace('https://', '').replace('/', '')}
                  </Typography>
                </a>
              </Typography>
            </Grid>
            <Typography
              className={classes.contactContent}
              component="div"
              style={{
                fontWeight: 'bold',
                letterSpacing: 1,
                zIndex: 2,
              }}
              variant="body2"
            >
              You can also follow me at:
              <Grid>
                <a href={flavourTextList.facebookLink}>
                  <FBStar className={classes.contactIcons} />
                </a>
                <a href={flavourTextList.instaLink}>
                  <InstaStar className={classes.contactIcons} />
                </a>
                <a href={flavourTextList.linkedInLink}>
                  <LinkedinStar className={classes.contactIcons} />
                </a>
              </Grid>
            </Typography>
            <RandomShapes className={classes.bottomShapes} />
          </Grid>
        </Grid>
      </div>
    );
  }
}

const styles = (theme) => ({
  mainContainer: {
    width: '100%',
    height: 'fit-content',
    padding: 40,
    [theme.breakpoints.down('xs')]: {
      padding: 20,
    },
  },
  contactContainer: {
    backgroundColor: theme.palette.secondary.main,
  },
  photoContainer: {
    padding: 40,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    [theme.breakpoints.down('xs')]: {
      padding: 20,
    },
  },
  topShapes: {
    position: 'absolute',
    width: 240,
    left: '40px',
    opacity: 0.1,
    [theme.breakpoints.down('sm')]: {
      transform: 'rotate(180deg) translate(0px, 160px)',
    },
    [theme.breakpoints.up('md')]: {
      transform: 'rotate(180deg) translate(0px, 200px)',
    },
    [theme.breakpoints.up('lg')]: {
      transform: 'rotate(180deg) translate(0px, 160px)',
    },
  },
  contactPhotos: {
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
    [theme.breakpoints.up('md')]: {
      width: '80%',
    },
    [theme.breakpoints.up('lg')]: {
      width: '100%',
    },
  },
  contactTextContainer: {
    padding: '40px 80px',
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'column',
    [theme.breakpoints.down('md')]: {
      alignItems: 'center',
    },
    [theme.breakpoints.down('xs')]: {
      padding: '0px 40px',
    },
  },
  contactInfoContainer: {
    [theme.breakpoints.down('md')]: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      width: 440,
    },
    [theme.breakpoints.down('xs')]: {
      width: '100%',
    },
  },
  contactTitle: {
    color: 'white',
    fontSize: 56,
    lineHeight: 1,
    marginBottom: 32,
    [theme.breakpoints.down('md')]: {
      marginBottom: 0,
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: 24,
    },
  },
  contactContent: {
    color: 'white',
    width: 'fit-content',
    fontSize: 16,
    marginTop: 16,
    lineHeight: 1,
    [theme.breakpoints.down('md')]: {
      textAlign: 'center',
    },
    [theme.breakpoints.down('xs')]: {
      lineHeight: 1.4,
      fontSize: 12,
    },
  },
  contactLinkContainer: {
    color: 'white',
  },
  contactLinks: {
    color: 'white',
    fontSize: 16,
    [theme.breakpoints.down('xs')]: {
      fontSize: 12,
    },
  },
  contactIcons: {
    width: 40,
    margin: '16px 32px 0px 0px',
    [theme.breakpoints.down('md')]: {
      margin: 16,
    },
    [theme.breakpoints.down('sm')]: {
      width: 32,
      margin: 12,
    },
    [theme.breakpoints.down('xs')]: {
      margin: 8,
    },
  },
  bottomShapes: {
    position: 'absolute',
    width: 320,
    alignSelf: 'flex-end',
    opacity: 0.1,
    margin: '320px 0px 0px 80px',
    [theme.breakpoints.down('md')]: {
      marginTop: 0,
    },
    [theme.breakpoints.down('sm')]: {
      marginLeft: 40,
    },
  },
});

export default withStyles(styles)(withMediaQuery(Contact));
