import styles from './Main.module.css';
import React from 'react';
import About from './About/About';
import Export from './Export/Export';
import Destination from './Destination/Destination';

function Main(): JSX.Element {
	return (
		<main className={styles.main}>
			<About/>
			<Export/>
			<Destination/>
		</main>
	);
}

export default Main;
