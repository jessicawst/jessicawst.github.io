import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import withMediaQuery from '../utils/withMediaQuery';
import {
	AboutCurve,
	ZigZag,
	HeartWithDashes,
	Logo,
	SelfPortrait,
	ResumePhoto,
} from '../assets';

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
						<HeartWithDashes style={{ width: '60vw' }} />
						<Grid style={{ position: 'absolute', zIndex: 1 }}>
							<Typography
								style={{
									display: 'flex',
									alignItems: 'center',
									marginLeft: 10,
									marginBottom: 12,
									fontSize: 48,
								}}
							>
								I'm <Logo style={{ margin: '0px 16px' }} /> -
							</Typography>
							<Typography
								style={{
									backgroundColor: '#FAF5B0',
									padding: '8px 28px',
									fontSize: 26,
								}}
							>
								UI/UX + Graphic Designer
							</Typography>
						</Grid>
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
						<SelfPortrait
							style={{ width: '80%', marginBottom: -64, zIndex: 2 }}
						/>
					</Grid>
					<Grid item lg={12} md={12}>
						<AboutCurve className={classes.aboutCurve} />
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
							<ResumePhoto style={{ width: '100%' }} />
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
						<Grid style={{ marginBottom: 16 }} container alignItems="flex-end">
							<Grid
								className={classes.helloFlavor}
								container
								alignContent="flex-end"
								justifyContent="flex-start"
							>
								<Typography style={{ fontSize: 45, lineHeight: 0.8 }}>
									HELLO!
								</Typography>
							</Grid>
							<ZigZag />
						</Grid>
						<Grid style={{ paddingRight: 48 }}>
							<Typography
								style={{ fontSize: 13, marginBottom: 8 }}
								variant="body2"
							>
								I am an UX/UI + Graphic Designer. Possessing the ability to lead
								and the willingness to be led, I am a team player who can also
								work well individually.
							</Typography>
							<Typography
								style={{ fontSize: 13, marginBottom: 8 }}
								variant="body2"
							>
								I am an individual driven to accomplish, to the best of my
								ability, the tasks given to me. Beyond my personal tasks, I
								would assist my peers and colleagues whenever I can. As someone
								who is adventurous and loves to be challenged, I believe that
								passion and hard work is the key to success.
							</Typography>
							<Typography
								style={{ fontSize: 13, marginBottom: 8 }}
								variant="body2"
							>
								A designer that seeks to satisfy your needs and translate your
								wildest dreams into reality.
							</Typography>
							<Typography
								style={{ fontSize: 18, marginBottom: 8 }}
								variant="body2"
							>
								If you can dream it, I can design it!
							</Typography>
						</Grid>
						<Grid>
							<Button
								className={classes.resumeButton}
								variant="contained"
								color="secondary"
							>
								<Typography
									style={{ color: 'white', textTransform: 'capitalize' }}
								>
									Download Resume
								</Typography>
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
		width: '100%',
		marginTop: 48,
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
		padding: '0px 80px',
		marginBottom: -32,
	},
	resumeContainer: {
		paddingRight: 100,
	},
	helloFlavor: {
		width: 165,
		height: 6,
		backgroundColor: theme.palette.accent.main,
		marginRight: 16,
	},
	resumeButton: {
		backgroundColor: theme.palette.text.main,
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
