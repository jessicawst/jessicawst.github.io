import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import withMediaQuery from '../utils/withMediaQuery';
import aboutCurve from '../assets/aboutCurve.svg';
import zigZag from '../assets/zigZag.svg';

class About extends React.Component {
	render() {
		const { classes, isDesktop } = this.props;

		return (
			<div className={classes.mainContainer}>
				<Grid container lg={12} md={12}>
					<Grid
						className={classes.introCardContainer}
						container
						item
						lg={6}
						md={12}
						direction="column"
						justifyContent="center"
						alignItems="center"
					>
						<Typography>I'm Shuting</Typography>
						<Typography>UI/UX + Graphic Designer</Typography>
					</Grid>
					<Grid
						className={classes.selfPortraitContainer}
						container
						item
						lg={6}
						md={12}
						justifyContent="center"
						alignItems="center"
					>
						<Grid
							className={classes.selfPortraitCircle}
							container
							justifyContent="center"
							alignItems="center"
						>
							<Typography>Shu Ting Picture</Typography>
						</Grid>
					</Grid>
					<Grid item lg={12} md={12}>
						<img className={classes.aboutCurve} src={aboutCurve} alt="" />
					</Grid>
					{isDesktop ? (
						<Grid
							className={classes.redBoxContainer}
							container
							item
							lg={6}
							justifyContent="center"
							alignItems="center"
						>
							<Grid className={classes.redBox}>
								<Grid className={classes.redBoxPhoto}></Grid>
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
						direction="column"
						justifyContent="center"
					>
						<Grid container alignItems="flex-end">
							<Grid
								className={classes.helloFlavor}
								container
								alignContent="flex-end"
								justifyContent="flex-start"
							>
								<Typography>HELLO!</Typography>
							</Grid>
							<img src={zigZag} alt="" />
						</Grid>
						<Grid>
							<Typography>
								I am an UX/UI + Graphic Designer. Possessing the ability to lead
								and the willingness to be led, I am a team player who can also
								work well individually.
								<br />I am an individual driven to accomplish, to the best of my
								ability, the tasks given to me. Beyond my personal tasks, I
								would assist my peers and colleagues whenever I can. As someone
								who is adventurous and loves to be challenged, I believe that
								passion and hard work is the key to success.
								<br />A designer that seeks to satisfy your needs and translate
								your wildest dreams into reality.
							</Typography>
						</Grid>
						<Grid>
							<Button
								className={classes.resumeButton}
								variant="contained"
								color="secondary"
							>
								<Typography>Download Resume</Typography>
							</Button>
						</Grid>
					</Grid>
				</Grid>
			</div>
		);
	}
}

const styles = theme => ({
	mainContainer: {
		width: 'inherit',
		backgroundColor: theme.palette.offWhite.main,
	},
	introCardContainer: {
		backgroundColor: theme.palette.primary.main,
	},
	selfPortraitContainer: {
		backgroundColor: theme.palette.primary.main,
	},
	selfPortraitCircle: {
		marginTop: 16,
		marginBottom: -16,
		width: 450,
		height: 450,
		backgroundColor: '#FABABB',
		borderRadius: '50%',
		zIndex: 1,
	},
	aboutCurve: {
		width: '100%',
	},
	redBoxContainer: {
		paddingTop: 16,
		paddingBottom: 16,
	},
	redBox: {
		backgroundColor: theme.palette.secondary.main,
		width: 376,
		height: 460,
		transform: 'rotate(10deg)',
	},
	redBoxPhoto: {
		backgroundColor: 'black',
		left: 16,
		up: 16,
		width: 376,
		height: 460,
		transform: 'rotate(-10deg) translate(-40px, -16px)',
	},
	resumeContainer: {
		paddingRight: 100,
	},
	helloFlavor: {
		width: 165,
		height: 6,
		backgroundColor: theme.palette.accent.main,
	},
	resumeButton: {
		backgroundColor: '#3D3334',
		boxShadow: 'none',
		borderRadius: 0,
	},
});

export default withStyles(styles)(
	withMediaQuery([
		[
			'isDesktop',
			theme => theme.breakpoints.up('lg'),
			{
				defaultMatches: true,
			},
		],
	])(About)
);
