import React, { useEffect, useState } from 'react';
import { Button, Grid, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import withMediaQuery from './withMediaQuery';

const PDFViewer = props => {
	const { classes, url, isDesktop, isMobile } = props;

	const [componentWidth, setComponentWidth] = useState(
		isMobile ? window.innerWidth - 16 : window.innerWidth - 160
	);
	const [numPages, setNumPages] = useState(null);
	const [pageNumber, setPageNumber] = useState(1);
	const [file] = useState(url);

	const isFirstPage = pageNumber <= 1;
	const isLastPage = pageNumber >= numPages;

	let pageName = 'Page ';
	if (!isDesktop) pageName += `${pageNumber} of ${numPages}`;
	else if (isFirstPage) pageName += `${pageNumber + 1} of ${numPages}`;
	else if (isLastPage) pageName += `${pageNumber} of ${numPages}`;
	else pageName += `${pageNumber} & ${pageNumber + 1} of ${numPages}`;

	useEffect(() => {
		const setWidth = () =>
			setComponentWidth(
				isMobile ? window.innerWidth - 16 : window.innerWidth - 160
			);
		window.addEventListener('resize', () => setWidth());
		return () => window.removeEventListener('resize', () => setWidth());
	}, [isMobile, componentWidth]);

	function onDocumentLoadSuccess({ numPages }) {
		setNumPages(numPages);
		isDesktop ? setPageNumber(0) : setPageNumber(1);
	}

	function changePage(offset) {
		setPageNumber(prevPageNumber => prevPageNumber + offset);
	}

	function previousPage() {
		isDesktop ? changePage(-2) : changePage(-1);
	}

	function nextPage() {
		isDesktop ? changePage(2) : changePage(1);
	}

	return (
		<div className={classes.mainContainer}>
			<Document
				className={classes.document}
				file={file}
				onLoadSuccess={onDocumentLoadSuccess}
			>
				{renderPages({
					width: isDesktop ? componentWidth / 2 : componentWidth,
					pageNumber,
					isFirstPage,
					isLastPage,
					isDesktop,
				})}
			</Document>
			<Grid className={classes.buttonGroup}>
				<Button
					className={classes.button}
					variant="contained"
					color="secondary"
					size="small"
					disabled={isFirstPage}
					onClick={previousPage}
					disableElevation
				>
					<Typography className={classes.buttonText}>Prev</Typography>
				</Button>
				<Typography className={classes.pageNumText}>{pageName}</Typography>
				<Button
					className={classes.button}
					variant="contained"
					color="secondary"
					size="small"
					disabled={isLastPage}
					onClick={nextPage}
					disableElevation
				>
					<Typography className={classes.buttonText}>Next</Typography>
				</Button>
			</Grid>
		</div>
	);
};

const renderPages = props => {
	const { width, pageNumber, isFirstPage, isLastPage, isDesktop } = props;

	const currentPage = isFirstPage ? pageNumber + 1 : pageNumber;

	return (
		<React.Fragment>
			{isDesktop ? (
				isFirstPage || isLastPage ? (
					<Page width={width} noData="" pageNumber={currentPage} />
				) : (
					<React.Fragment>
						<Page width={width} noData="" pageNumber={currentPage} />
						<Page width={width} noData="" pageNumber={currentPage + 1} />
					</React.Fragment>
				)
			) : (
				<Page width={width} noData="" pageNumber={pageNumber} />
			)}
		</React.Fragment>
	);
};

const styles = theme => ({
	mainContainer: {
		display: 'flex',
		flexDirection: 'column',
		width: '100%',
		justifyContent: 'center',
		alignItems: 'center',
	},
	document: {
		width: '100%',
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
	},
	buttonGroup: {
		marginTop: 16,
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
	},
	pageNumText: {
		margin: '0px 8px',
		[theme.breakpoints.down('xs')]: {
			fontSize: 12,
		},
	},
	button: {},
	buttonText: {
		color: 'white',
		[theme.breakpoints.down('xs')]: {
			fontSize: 12,
		},
	},
});

export default withStyles(styles)(withMediaQuery(PDFViewer));
