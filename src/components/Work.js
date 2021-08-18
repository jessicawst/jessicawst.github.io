import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import workList from '../data/workList';
import workSlant from '../assets/workSlant.svg';
import star from '../assets/star.svg';

class Work extends React.Component {
	render() {
		const { classes } = this.props;

		return (
			<div className={classes.mainContainer}>
				<img className={classes.topSlant} src={workSlant} alt="" />
				<Grid
					className={classes.workTitleContainer}
					container
					direction="column"
					alignContent="center"
					justifyContent="flex-end"
				>
					<Typography style={{ lineHeight: 0.75 }} variant="h4">
						MY WORK
					</Typography>
					<Grid className={classes.titleAccent}>
						<Typography style={{ lineHeight: 1 }}>awesome projects</Typography>
						<img
							style={{ transform: 'translate(128px, -64px)' }}
							src={star}
							alt=""
						/>
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
								<Typography className={classes.workListItem}>
									{item.name}
									{index === 0 ? (
										<img
											style={{
												transform: 'translate(68px, -16px)',
												height: 48,
												width: 48,
											}}
											src={star}
											alt=""
										/>
									) : (
										''
									)}
								</Typography>
								{/* <img
								className={classes.workListItem}
								src={item.image}
								alt={item.name}
							/> */}
							</Grid>
						))}
					</Grid>
				</div>
				<img className={classes.bottomSlant} src={workSlant} alt="" />
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
		marginBottom: 1,
	},
	workGridContainer: {
		width: 840,
	},
	workListItem: {
		backgroundColor: theme.palette.primary.main,
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
