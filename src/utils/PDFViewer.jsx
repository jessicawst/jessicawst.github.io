import React, { useEffect, useState } from 'react';
import { Document, Page } from 'react-pdf';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/styles';

const PDFViewer = (props) => {
  const { classes, url } = props;

  const [componentWidth, setComponentWidth] = useState(window.innerWidth - 160);
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [file] = useState(url);

  const isFirstPage = pageNumber <= 1;
  const isLastPage = pageNumber >= numPages;

  useEffect(() => {
    const setWidth = () => setComponentWidth(window.innerWidth - 160);
    window.addEventListener('resize', () => setWidth());
    return () => window.removeEventListener('resize', () => setWidth());
  }, [componentWidth]);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setPageNumber(1);
  }

  function changePage(offset) {
    setPageNumber((prevPageNumber) => prevPageNumber + offset);
  }

  function previousPage() {
    changePage(-1);
  }

  function nextPage() {
    changePage(1);
  }

  return (
    <div className={classes.mainContainer}>
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
        <Typography
          className={classes.pageNumText}
        >{`Page ${pageNumber} of ${numPages}`}</Typography>
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
      <Document className={classes.document} file={file} onLoadSuccess={onDocumentLoadSuccess}>
        <Page width={componentWidth} noData="" pageNumber={pageNumber} />
      </Document>
    </div>
  );
};

const styles = (theme) => ({
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
    margin: 16,
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

export default withStyles(styles)(PDFViewer);
