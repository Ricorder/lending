import styles from './Nav.module.scss';
import React from 'react';
import Logo from './logo.svg';
import { NavtProps } from './Nav.props';

function Nav({ ...props }: NavtProps): JSX.Element {
	return (
		<nav  className={styles.nav}>
			<section>
				<a href="#about"   className={styles.linkLeft}>ABOUT US</a>
				<a href="#exsport"   className={styles.linkLeft}>EXPORT</a>
				<a href="#contacts"   className={styles.linkLeft}>CONTACTS</a>
			</section>
			<section>
				<Logo/>
			</section>
			<section   className={styles.linkRightBox}>
				<a href="#"   className={styles.linkRight}>WRITE TO US</a>
			</section>
		</nav>
	);
}

export default Nav;
