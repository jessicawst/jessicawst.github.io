import React from 'react';
import { Typography } from '@material-ui/core';
import workList from '../data/workList';
import { Redirect } from 'react-router';

const WorkDetails = props => {
	const currentWork = workList.find(
		item => item.link === props.match.params.id
	);

	if (!currentWork) return <Redirect to="/" />;

	return (
		<div style={{ marginTop: 96 }}>
			<Typography>{currentWork.link}</Typography>
		</div>
	);
};

export default WorkDetails;
