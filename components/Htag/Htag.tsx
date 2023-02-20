import styles from './Htag.module.css';
import React from 'react';
import { HtagProps } from './Htag.props';
import cn from 'classnames';

function Htag({ appearance, children,  className }: HtagProps): JSX.Element {
	return <h3 className={cn(styles.htag, className, {
				[styles.blue]: appearance == 'blue',
				[styles.orange]: appearance == 'orange',
				[styles.green]: appearance == 'green',
			})}>{children}</h3>
}

export default Htag;
