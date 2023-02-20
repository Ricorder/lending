import styles from './Header.module.css';
import React from 'react';
import { HeaderProps } from './Header.props';

function Header({ ...props }: HeaderProps): JSX.Element {
	return (
		<header  className={styles.header}>
			<h1  className={styles.head}>Shaping the future of biotech</h1>
		</header>
	);
}

export default Header;
