import React from 'react';
import { Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

class Contact extends React.Component {
	render() {
		const { classes } = this.props;

		return (
			<div className={classes.mainContainer}>
				<Typography>Contact Page</Typography>
			</div>
		);
	}
}

const styles = theme => ({
	mainContainer: {
		width: 'inherit',
	},
});

export default withStyles(styles)(Contact);
