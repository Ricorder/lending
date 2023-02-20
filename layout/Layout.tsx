import styles from './Layout.module.css';
import React, { FunctionComponent } from 'react';
import Footer from './Footer/Footer';
import { LayoutProps } from './Layout.props';
import Header from './Header/Header';
import Nav from './Nav/Nav';

function Layout({ children }: LayoutProps): JSX.Element {
	return (
		<div className={styles.wrapper}>
			<Nav/>
			<Header />
			<>
				{children}
			</>
			<Footer className={styles.footer} />
		</div>
	);
}

export default Layout;

export const withLayout = <T extends Record<string, unknown>>(Component: FunctionComponent<T>) => {
	return function withLayoutComponent(props: T): JSX.Element {
		return (
				<Layout>
					<Component {...props} />
				</Layout>
		);
	};
};
