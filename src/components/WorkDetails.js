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

	const { title, tags, description, logo, video } = currentWork;
	const tagString = tags.join(' | ');

	return (
		<Grid className={classes.mainContainer} container>
			<Grid item lg md={12} sm={12} xs={12}>
				<Typography>{title}</Typography>
				<Typography>{tagString}</Typography>
				<Typography>{description}</Typography>
			</Grid>
			<Grid item lg={4} md={12} sm={12} xs={12}>
				{logo({ style: { width: '20vw', borderRadius: '50%' } })}
			</Grid>
			<Grid item lg={12} md={12} sm={12} xs={12}>
				<Typography>PDF: </Typography>
				<Grid className={classes.pdfViewer} item>
					<PDFViewer url="pdfs/TestFile.pdf" />
				</Grid>
			</Grid>
			<Grid item lg={12} md={12} sm={12} xs={12}>
				<Typography>Video: </Typography>
				<Grid className={classes.videoPlayer} item>
					<ReactPlayer
						url={video}
						volume={0}
						width="100%"
						height="auto"
						playing
						muted
						loop
					/>
				</Grid>
				<Grid item lg={12} md={12} sm={12} xs={12}>
					<Typography>Designs: </Typography>
					<Grid className={classes.designs} item></Grid>
				</Grid>
			</Grid>
		</Grid>
	);
};

const styles = theme => ({
	mainContainer: {
		marginTop: 96,
		padding: '40px 80px',
	},
	mainTextContainer: {},
	pdfViewer: {
		width: '100%',
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
