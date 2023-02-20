import styles from './Paragraph.module.css';
import React from 'react';
import { ParagraphProps } from './Paragraph.props';
import cn from 'classnames';

function Paragraph({ appearance, children,  className }: ParagraphProps): JSX.Element {

	return (
		<>
			<p className={cn(styles.p, className, {
				[styles.blue]: appearance == 'blue',
				[styles.white]: appearance == 'white',
			})}>{children}</p>
		</>
	);
}

export default Paragraph;
