import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface AboutProps extends DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement> {
	children: ReactNode;
	appearance: 'blue' | 'white';
 }
