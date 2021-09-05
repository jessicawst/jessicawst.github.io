import React from 'react';
import About from './About';
import Work from './Work';
import Contact from './Contact';

const Home = props => {
	const handleScroll = e => {
		console.log(e);
		const bottom =
			e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight;
		if (bottom) {
			console.log('Bottom');
			props.setTopBarValue(2);
		}
	};

	return (
		<div onScroll={handleScroll}>
			<About />
			<Work />
			<Contact />
		</div>
	);
};

export default Home;
