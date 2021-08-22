import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import {
	ContactPhotos,
	FBStar,
	InstaStar,
	LinkedinStar,
	RandomShapes,
} from '../assets';

class Contact extends React.Component {
	render() {
		const { classes } = this.props;

		return (
			<div className={classes.mainContainer}>
				<Grid
					className={classes.contactContainer}
					container
					lg={12}
					md={12}
					sm={12}
				>
					<Grid className={classes.photoContainer} item lg={6} md={12} sm={12}>
						<RandomShapes
							style={{
								position: 'absolute',
								width: 240,
								transform: 'rotate(180deg) translate(48px, 48px)',
								opacity: 0.1,
							}}
						/>
						<ContactPhotos style={{ width: '100%' }} />
					</Grid>
					<Grid
						className={classes.contactTextContainer}
						item
						lg={6}
						md={12}
						sm={12}
					>
						<Grid>
							<Typography className={classes.contactTitle}>
								CONTACT ME!
							</Typography>
							<Typography
								className={classes.contactContent}
								style={{ marginBottom: 24 }}
								variant="body2"
							>
								If you have a project that i am fit for it or any questions that
								you would like to ask, feel free to drop me an email and i will
								get back to you as soon as possible.
							</Typography>
							<Typography className={classes.contactContent} variant="body2">
								Email Address
								<a
									style={{ color: 'white' }}
									href="mailto:jessicawst@outlook.com"
								>
									<Typography className={classes.contactLinks} variant="body2">
										jessicawst@outlook.com
									</Typography>
								</a>
							</Typography>
							<Typography className={classes.contactContent} variant="body2">
								Phone Number
								<a style={{ color: 'white' }} href="tel:+6591879338">
									<Typography className={classes.contactLinks} variant="body2">
										+65 9187 9338
									</Typography>
								</a>
							</Typography>
							<Typography className={classes.contactContent} variant="body2">
								On Web
								<a
									style={{ color: 'white' }}
									href="http://jessicawst.com/pfolio/"
								>
									<Typography className={classes.contactLinks} variant="body2">
										jessicawst.com/pfolio
									</Typography>
								</a>
							</Typography>
						</Grid>
						<Typography
							className={classes.contactContent}
							style={{ fontWeight: 'bold', zIndex: 2 }}
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
						<RandomShapes
							style={{
								position: 'absolute',
								width: 320,
								alignSelf: 'flex-end',
								transform: 'translate(80px, 320px)',
								opacity: 0.1,
							}}
						/>
					</Grid>
				</Grid>
			</div>
		);
	}
}

const styles = theme => ({
	mainContainer: {
		width: '100%',
		padding: 40,
	},
	contactContainer: {
		backgroundColor: theme.palette.secondary.main,
	},
	photoContainer: {
		padding: 40,
	},
	contactTextContainer: {
		padding: '40px 80px',
		display: 'flex',
		justifyContent: 'space-between',
		flexDirection: 'column',
	},
	contactTitle: {
		color: 'white',
		fontSize: 56,
		lineHeight: 1,
		marginBottom: 32,
	},
	contactContent: {
		color: 'white',
		width: 'fit-content',
		fontSize: 16,
		marginTop: 16,
		lineHeight: 1,
	},
	contactLinks: {
		color: 'white',
		fontSize: 16,
	},
	contactIcons: {
		width: 40,
		marginTop: 8,
		marginRight: 32,
	},
});

export default withStyles(styles)(Contact);
