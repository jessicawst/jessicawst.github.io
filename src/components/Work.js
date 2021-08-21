import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import workList from '../data/workList';
import { WorkSlant, Star, LatestWorkStar } from '../assets';

class Work extends React.Component {
	render() {
		const { classes } = this.props;

		return (
			<div className={classes.mainContainer}>
				<WorkSlant className={classes.topSlant} />
				<Grid
					className={classes.workTitleContainer}
					container
					direction="column"
					alignContent="center"
					justifyContent="center"
				>
					<Typography style={{ fontSize: 36, lineHeight: 0.75 }}>
						MY WORK
					</Typography>
					<Grid className={classes.titleAccent}>
						<Typography style={{ lineHeight: 1 }}>awesome projects</Typography>
						<Star style={{ transform: 'translate(128px, -64px)' }} />
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
						justifyContent="center"
						alignItems="center"
					>
						{workList.map((item, index) => (
							<Grid item lg={4} md={6} sm={12}>
								<Grid className={classes.workListItem}>
									{index === 0 ? (
										<LatestWorkStar
											style={{ position: 'absolute', width: 48 }}
										/>
									) : (
										''
									)}
								</Grid>
							</Grid>
						))}
					</Grid>
				</div>
				<WorkSlant className={classes.bottomSlant} />
			</div>
		);
	}
}

const styles = theme => ({
	mainContainer: {
		width: '100%',
	},
	topSlant: {
		width: '100%',
	},
	workTitleContainer: {
		height: 80,
		marginTop: -85,
	},
	titleAccent: {
		backgroundColor: theme.palette.accent.main,
		height: 10,
		marginLeft: 32,
	},
	workContainer: {
		backgroundColor: theme.palette.secondary.main + '1A',
		display: 'grid',
		justifyContent: 'center',
		alignItems: 'center',
		padding: 40,
	},
	workGridContainer: {
		width: 840,
	},
	workListItem: {
		backgroundColor: theme.palette.text.main,
		width: 264,
		height: 264,
		borderRadius: 8,
		textAlign: 'center',
	},
	bottomSlant: {
		width: '100%',
		transform: 'rotate(180deg)',
	},
});

export default withStyles(styles)(Work);
