import React, { useState } from 'react';
import { Button, ButtonGroup } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';

const PDFViewer = props => {
	const { classes, url } = props;

	const [numPages, setNumPages] = useState(null);
	const [pageNumber, setPageNumber] = useState(1);
	const [file, setFile] = useState(url);

	function onDocumentLoadSuccess({ numPages }) {
		setNumPages(numPages);
		setPageNumber(0);
	}

	function changePage(offset) {
		setPageNumber(prevPageNumber => prevPageNumber + offset);
	}

	function previousPage() {
		changePage(-2);
	}

	function nextPage() {
		changePage(2);
	}
	return (
		<div>
			<Document
				className={classes.document}
				file={file}
				onLoadSuccess={onDocumentLoadSuccess}
			>
				<Page pageNumber={pageNumber} />
				<Page pageNumber={pageNumber + 1} />
			</Document>
			<ButtonGroup variant="contained" color="primary" disableElevation>
				<Button disabled={pageNumber <= 1} onClick={previousPage}>
					Prev
				</Button>
				<Button>
					Page {pageNumber || (numPages ? 1 : '--')} &{' '}
					{pageNumber + 1 || (numPages ? 1 : '--')} of {numPages || '--'}
				</Button>
				<Button disabled={pageNumber >= numPages} onClick={nextPage}>
					Next
				</Button>
			</ButtonGroup>
		</div>
	);
};

const styles = theme => ({
	document: {
		display: 'flex',
		flexDirection: 'row',
	},
});

export default withStyles(styles)(PDFViewer);
