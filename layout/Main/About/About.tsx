import styles from './About.module.css';
import React from 'react';
import { AboutProps } from './About.props';
import Infinity from './infinity.svg';
import Htag from '../../../components/Htag/Htag';

function About({ ...props }: AboutProps): JSX.Element {

	return (
		<section id="about" className={styles.about}>
			<Htag appearance='orange' className={styles.h2}>ABOUT US</Htag>
			<p className={styles.p}>BIOCAD HONG KONG is an established company which is involved in R&D, business development, marketing and commercialising of biosimilars and innovative pharmaceuticals for the treatment of oncological, autoimmune, and orphan diseases.</p>
			<div className={styles.block}>
				<Infinity className={styles.infinity}/>
				<p className={styles.p2}>Our aim is to be flexible to suit your business needs, therefore we provide several kinds of opportunities including licensing, contract manufacturing and technology transfer.</p>
			</div>
		</section>
	);
}

export default About;
