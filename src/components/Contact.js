import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';

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
					<Grid item lg={6} md={12} sm={12}></Grid>
					<Grid item lg={6} md={12} sm={12}>
						<Typography className={classes.contactTitle}>
							Contact Me!
						</Typography>
						<Typography className={classes.contactContent}>
							If you have a project that i am fit for it or any questions that
							you would like to ask, feel free to drop me an email and i will
							get back to you as soon as possible.
						</Typography>
						<Typography className={classes.contactContent}>
							Email Address jessicawst@outlook.com
						</Typography>
						<Typography className={classes.contactContent}>
							Phone Number 9187 9338
						</Typography>
						<Typography className={classes.contactContent}>
							On Web jessicawst.com/pfolio
						</Typography>
						<Typography className={classes.contactContent}>
							You can also follow me at:
						</Typography>
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
	contactTitle: {
		color: 'white',
	},
	contactContent: {
		color: 'white',
	},
});

export default withStyles(styles)(Contact);
