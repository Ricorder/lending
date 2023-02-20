import styles from './Export.module.css';
import React from 'react';
import { ExportProps } from './Export.props';
import Htag from '../../../components/Htag/Htag';
import Paragraph from '../../../components/Paragraph/Paragraph';
import Line from './line.svg'
import LineLong from './line-long.svg'
import P from '../../../components/P/P';

function Export({ ...props }: ExportProps): JSX.Element {

	return (
		<section id="exsport"  className={styles.export}>
			<Htag appearance='orange' className={styles.h2}>Export destinations</Htag>
			<Paragraph appearance='white' className={styles.p}>The company operates in Latin America, South-East Asia, Middle East and Africa regions</Paragraph>
			<div className={styles.country}>
				<div className={styles.block}>
					<P>Bangladesh</P><LineLong/>
					<P>Bolivia</P><LineLong/>
					<P>Cambodia</P><LineLong/>
					<P>CoteD’Ivoire</P><LineLong/>
					<P>Dominican Republic</P><LineLong/>
					<P>Guatemala</P><LineLong/>
					<P>Honduras</P><LineLong/>
				</div>
				<div className={styles.block}>
					<P>India</P><LineLong/>
					<P>Iraq</P><LineLong/>
					<P>Kenya</P><LineLong/>
					<P>Mexico (Technology Transfer)</P><LineLong/>
					<P>Morocco (Technology Transfer)</P><LineLong/>
					<P>Nicaragua</P><LineLong/>
					<P>Panama</P><LineLong/>
				</div>
				<div className={styles.block}>
					<P>Pakistan</P><Line/>
					<P>Philippines</P><Line/>
					<P>Senegal</P><Line/>
					<P>Sri Lanka (Technology Transfer)</P><Line/>
					<P>Uganda</P><Line/>
					<P>Vietnam</P><Line/>
					<P>Yemen</P><Line/>
				</div>
			</div>
		</section>
	);
}

export default Export;
