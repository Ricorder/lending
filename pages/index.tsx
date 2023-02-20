import Head from 'next/head';
import React from 'react';
import { withLayout } from '../layout/Layout';
import Main from '../layout/Main/Main';

function Home(): JSX.Element {
	return (
		<>
			<Head>
				<title>Biocad Hong Kong</title>
				<meta name="description" content='Shaping the future of biotech'/>
				<meta property="og:title" content='Biocad Hong Kong' />
				<meta property="og:description" content='Shaping the future of biotech' />
				<meta property="og:type" content="article" />
			</Head>
			<Main/>
		</>
	);
}

export default withLayout(Home);
