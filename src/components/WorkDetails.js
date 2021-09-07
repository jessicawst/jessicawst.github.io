import React from 'react';
import { Redirect } from 'react-router';
import ReactPlayer from 'react-player';
import { Grid, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import workList from '../data/workList';
import PDFViewer from '../utils/PDFViewer';

const WorkDetails = props => {
	const { classes, match } = props;

	const currentWork = workList.find(item => item.link === match.params.id);
	if (!currentWork) return <Redirect to="/" />;

	const { name, title, tags, description, logo, video, file } = currentWork;
	const tagString = tags.join(' | ');

	return (
		<Grid className={classes.mainContainer} container>
			<Grid
				className={classes.mainTextContainer}
				item
				lg
				md={12}
				sm={12}
				xs={12}
			>
				<Typography className={classes.titleText}>{title}</Typography>
				<Typography className={classes.tagText}>{tagString}</Typography>
				<Typography className={classes.descriptionText} variant="body2">
					{description}
				</Typography>
			</Grid>
			<Grid item lg={4} md={12} sm={12} xs={12}>
				{logo({ style: { width: '20vw', borderRadius: '50%' } })}
			</Grid>
			<Grid className={classes.pdfViewer} item lg={12} md={12} sm={12} xs={12}>
				<Typography>Below is the full Brand Bible of {name}:</Typography>
				<PDFViewer url={file} />
			</Grid>
			<Grid item lg={12} md={12} sm={12} xs={12}>
				<Typography>Below is a short video made for {name}:</Typography>
				<Grid className={classes.videoPlayer} item>
					<ReactPlayer
						url={video}
						volume={0}
						width="100%"
						height="auto"
						controls
						playing
						muted
						loop
					/>
				</Grid>
			</Grid>
			<Grid item lg={12} md={12} sm={12} xs={12}>
				<Typography>Below is the artwork designed for {name}: </Typography>
				<Grid className={classes.designs} item></Grid>
			</Grid>
		</Grid>
	);
};

const styles = theme => ({
	mainContainer: {
		marginTop: 96,
		padding: '40px 80px',
	},
	mainTextContainer: {
		paddingRight: 40,
	},
	titleText: {
		fontSize: 48,
	},
	tagText: {
		fontSize: 24,
	},
	descriptionText: {
		fontSize: 16,
	},
	logoContainer: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},
	pdfViewer: {
		display: 'flex',
		flexDirection: 'column',
		width: '100%',
		height: 900,
		justifyContent: 'center',
	},
	videoPlayer: {
		width: '100%',
	},
	designs: {
		backgroundColor: 'black',
		width: '100%',
		height: 100,
	},
});

export default withStyles(styles)(WorkDetails);
