import styles from './Footer.module.scss';
import React from 'react';
import { format } from 'date-fns';
import Paragraph from '../../components/Paragraph/Paragraph';
import Htag from '../../components/Htag/Htag';
import Planet from './planet.svg';
import Line from './line.svg';
import Link from 'next/link';

function Footer(): JSX.Element {
	return (
		<footer id="contacts" className={styles.footer}>
			<Htag appearance='orange' className={styles.h2}>Contacts</Htag>
			<Paragraph appearance='white' className={styles.p}>Please do not hesitate to ask any question regarding business collaboration and get more detailed information about BIOCAD HONG KONG activities</Paragraph>
			<a href="#"   className={styles.linkRight}>WRITE TO US</a>
			<div className={styles.bigblock}>
				<Planet className={styles.planet} />
				<div className={styles.block}>
					<div className={styles.div}>
						<h2 className={styles.headblock}>Offices of BIOCAD HONG KONG are located in China and the UAE </h2>
						<Htag appearance='orange'>Branch of BIOCAD HONG KONG LIMITED in Dubai</Htag>
						<p className={styles.pb}>Business development activities.</p><p className={styles.pn}> Premises 704N, floor 07, Dubai Science Park Towers - North, Dubai, UAE</p>
					</div>
					<div className={styles.div}>
						<Htag appearance='orange'>BIOCAD HONG KONG LIMITED</Htag>
						<p className={styles.pb}>Procurement activities.</p><p className={styles.pn}> Room 309, Building 3, Daerwen Road 88, Pudong new area, Shanghai, China</p>
					</div>	
						<Line className={styles.line}/>
						<Htag appearance='green' >Legal address</Htag>
						<p className={styles.pm}>Level 54, Hopewell Centre, 183 Queen’s Road East, Hong Kong.</p>
						<Htag appearance='green'>email</Htag>
						<p className={styles.pn}>info@biocadhk.com</p>
				</div>
			</div>
			<p className={styles.text}>The site is currently under construction, new information coming soon. If you have any questions concerning potential partnership, please go to contacts section.</p>
			<div className={styles.foot}>
				<p className={styles.copyright}>©BIOCAD, {format(new Date(), 'yyyy')}</p>
				<div className={styles.links}>
					<Link href="#"><a className={styles.copyright}>User Agreement</a></Link>
					<Link href="#"><a className={styles.copyright}>Terms of Use</a></Link>
					<Link href="#"><a className={styles.copyright}>Cookies</a></Link>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
