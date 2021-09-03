import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import { Element } from 'react-scroll';
import {
	ContactPhotos,
	FBStar,
	InstaStar,
	LinkedinStar,
	RandomShapes,
} from '../assets';
import withMediaQuery from '../utils/withMediaQuery';

class Contact extends React.Component {
	render() {
		const { classes, isMobile } = this.props;

		return (
			<Element id="contactLink">
				<div className={classes.mainContainer}>
					<Grid
						className={classes.contactContainer}
						container
						lg={12}
						md={12}
						sm={12}
					>
						<Grid
							className={classes.photoContainer}
							item
							lg={6}
							md={12}
							sm={12}
						>
							<RandomShapes className={classes.topShapes} />
							<ContactPhotos className={classes.contactPhotos} />
						</Grid>
						<Grid
							className={classes.contactTextContainer}
							item
							lg={6}
							md={12}
							sm={12}
						>
							<Grid className={classes.contactInfoContainer}>
								<Typography className={classes.contactTitle}>
									CONTACT ME!
								</Typography>
								<Typography
									className={classes.contactContent}
									style={{ marginBottom: isMobile ? 8 : 24 }}
									variant="body2"
								>
									If you have a project that I am fit for it or any questions
									that you would like to ask, feel free to drop me an email and
									I will get back to you as soon as possible.
								</Typography>
								<Typography className={classes.contactContent} variant="body2">
									Email Address
									<a
										className={classes.contactLinkContainer}
										href="mailto:jessicawst@outlook.com"
									>
										<Typography
											className={classes.contactLinks}
											variant="body2"
										>
											jessicawst@outlook.com
										</Typography>
									</a>
								</Typography>
								<Typography className={classes.contactContent} variant="body2">
									Phone Number
									<a
										className={classes.contactLinkContainer}
										href="mailto:jessicawst@outlook.com"
									>
										<Typography
											className={classes.contactLinks}
											variant="body2"
										>
											9187 9338
										</Typography>
									</a>
								</Typography>
								<Typography className={classes.contactContent} variant="body2">
									On Web
									<a
										className={classes.contactLinkContainer}
										href="http://jessicawst.com/pfolio/"
									>
										<Typography
											className={classes.contactLinks}
											variant="body2"
										>
											jessicawst.com/pfolio
										</Typography>
									</a>
								</Typography>
								<Typography className={classes.contactContent} variant="body2">
									Website developed by
									<a
										className={classes.contactLinkContainer}
										href="https://keithcheongwaikeong.github.io/"
									>
										<Typography
											className={classes.contactLinks}
											variant="body2"
										>
											keithcheongwaikeong.github.io
										</Typography>
									</a>
								</Typography>
							</Grid>
							<Typography
								className={classes.contactContent}
								style={{ fontWeight: 'bold', letterSpacing: 1, zIndex: 2 }}
								variant="body2"
							>
								You can also follow me at:
								<Grid>
									<a href="https://www.facebook.com/hamsterwst">
										<FBStar className={classes.contactIcons} />
									</a>
									<a href="https://www.instagram.com/bluzstarz/">
										<InstaStar className={classes.contactIcons} />
									</a>
									<a href="https://www.linkedin.com/in/jessica-wong-shu-ting-a791bb115/">
										<LinkedinStar className={classes.contactIcons} />
									</a>
								</Grid>
							</Typography>
							<RandomShapes className={classes.bottomShapes} />
						</Grid>
					</Grid>
				</div>
			</Element>
		);
	}
}

const styles = theme => ({
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
		// transform: 'translate(80px, 320px)',
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
