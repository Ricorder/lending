import styles from './Destination.module.css';
import React from 'react';
import Paragraph from '../../../components/Paragraph/Paragraph';
import Figure1 from './figure1.svg';
import Figure2 from './figure2.svg';
import Figure3 from './figure3.svg';
import Figure4 from './figure4.svg';
import Htag from '../../../components/Htag/Htag';
import P from '../../../components/P/P';

function Destination(): JSX.Element {

	return (
		<section className={styles.destination}>
				<Paragraph appearance='blue'>What we are looking for</Paragraph>
				<div className={styles.block}>
						<div>
							<Figure1/>
							<Htag appearance='blue' className={styles.h2}>Supply chain partners</Htag>
							<P appearance='blue'>We are looking for suppliers with quality products and services and open for all kinds of opportunities.</P>
						</div>
						<div>
							<Figure2/>
							<Htag appearance='blue' className={styles.h2}>Contract manufacturing</Htag>
							<P appearance='blue'>BIOCAD HONG KONG has a potential to being involved in contract manufacturing processes: from early development and commercial-scale manufacturing for biological and chemical drug products to sales, marketing and promotion assistance.</P>
						</div>
						<div>
							<Figure3/>
							<Htag appearance='blue' className={styles.h2}>In-licensing and out-licensing</Htag>
							<P appearance='blue'>BIOCAD HONG KONG has developed an extensive dynamic network of partners introducing our products to multiple markets. For those who are ready to join it we can suggest ambitious and fulfilling opportunity to quickly expand their portfolio. And in case you would like to introduce your product to markets of our presence, we would be ready to assist you.</P>
						</div>
						<div>
							<Figure4/>
							<Htag appearance='blue' className={styles.h2}>International business development</Htag>
							<P appearance='blue'>Currently we are looking for partners with an expertise in oncology, dermatology and rheumatology to market and distribute our original biologic products prolgolimab (PD-1 inhibitor), netakimab (IL-17 inhibitor), levilimab (aIL6R), oncology biosimilars and generics in both highly-regulated and developing markets.</P>
						</div>
				</div>
		</section>
	);
}

export default Destination;
