import Navigation from '../../components/navigation/navigation.js';
import TitleOfSite from '../../components/titleOfSite/titleOfSite.js';

import Fon2 from './f.jpg';
import { Link } from 'react-router-dom';
import './homepage.scss';
import Footer from '../../components/footer/footer.js';
import ScrollArrow from '../../components/scrollArrow/scrollArrow.js';
import Wom from './wom.png';
import { useState, useEffect } from 'react';
import Spinner from '../../components/spinner/spinner.js';
const Homepage = () => {
	const [isLoading, setIsLoading] = useState(true);
	const timeoutId = 500;
	useEffect(() => {
		setTimeout(() => {
			setIsLoading(false);
		}, timeoutId);

		return () => {
			clearTimeout(timeoutId);
		};
	}, []);
	return (
		<>
			<div className="homepage">
				<Navigation />
				{isLoading ? (
					<Spinner />
				) : (
					<>
						<TitleOfSite />
						<button className="showCatalogue">
							<Link style={{ textDecoration: 'none' }} to="/catalogue">
								{' '}
								Show Catalogue{' '}
							</Link>
						</button>
						<div className="fonsBlock">
							<div className="fon1Wrapper">
								<img src={Fon2} alt="fon" className="fon1" />
							</div>
						</div>
						<img src={Wom} alt="wom" className="wom" />
						<ScrollArrow />
					</>
				)}
				<Footer />
			</div>
		</>
	);
};
export default Homepage;
