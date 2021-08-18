import React from 'react';
import { Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

class Work extends React.Component {
	render() {
		const { classes } = this.props;

		return (
			<div className={classes.mainContainer}>
				<Typography>Work Page</Typography>
			</div>
		);
	}
}

const styles = theme => ({
	mainContainer: {
		width: 'inherit',
		backgroundColor: theme.palette.secondary.main + '1A',
	},
});

export default withStyles(styles)(Work);
