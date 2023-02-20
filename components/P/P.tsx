import styles from './P.module.css';
import React from 'react';
import { PProps } from './P.props';
import cn from 'classnames';

function P({ appearance, children,  className }: PProps): JSX.Element {

	return (
		<>
			<p className={cn(styles.p, className, {
				[styles.blue]: appearance == 'blue',
			})}>{children}</p>
		</>
	);
}

export default P;
