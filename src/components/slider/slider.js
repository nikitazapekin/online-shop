import React, { useEffect, useRef, useState } from 'react';
import './slider.scss';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSliderData } from '../../redux/reducers/slider/sliderThunk.js';
import SliderItem from '../sliderItem/sliderItem.js';
import { ErrorBoundary } from '../errorBoundary/errorBoundary.js';
const Slider = () => {
	const slider = useRef();
	const state = useSelector((state) => state.sliderReducer);
	console.log(state);
	const [filteredElems, setFilteredElems] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const dispatch = useDispatch();
	useEffect(() => {
		let isDown = false;
		let startX;
		let scrollLeft;
		const handleMouseDown = (e) => {
			isDown = true;
			slider.current.classList.add('activeSlide');
			startX = e.pageX - slider.current.offsetLeft;
			scrollLeft = slider.current.scrollLeft;
		};

		const handleMouseLeave = () => {
			isDown = false;
			slider.current.classList.remove('activeSlide');
		};

		const handleMouseUp = () => {
			isDown = false;
			slider.current.classList.remove('activeSlide');
		};

		const handleMouseMove = (e) => {
			if (!isDown) return;
			e.preventDefault();
			const x = e.pageX - slider.current.offsetLeft;
			const SCROLL_SPEED = 3;
			const walk = (x - startX) * SCROLL_SPEED;
			slider.current.scrollLeft = scrollLeft - walk;
		};
		slider.current.addEventListener('mousedown', handleMouseDown);
		slider.current.addEventListener('mouseleave', handleMouseLeave);
		slider.current.addEventListener('mouseup', handleMouseUp);
		slider.current.addEventListener('mousemove', handleMouseMove);
		dispatch(fetchSliderData());
		return () => {
			if (slider.current != undefined) {
				slider.current.removeEventListener('mousedown', handleMouseDown);
				slider.current.removeEventListener('mouseleave', handleMouseLeave);
				slider.current.removeEventListener('mouseup', handleMouseUp);
				slider.current.removeEventListener('mousemove', handleMouseMove);
			}
		};
	}, []);
	const ell = useSelector((state) => state.sliderReducer.post);
	useEffect(() => {
		setFilteredElems(ell);
		console.log('ell' + ell);
	}, [ell]);

	return (
		<>
		<ErrorBoundary>

			<h1 className="animesLastMonth">Новые товары</h1>
			<ul ref={slider} className="gallery">
				{filteredElems !== undefined &&
					filteredElems !== null &&
					filteredElems.map((item) => (
						<Link
							key={item.id}
							style={{ textDecoration: 'none', color: 'black' }}
							to={`/tovarInfo/${item.id}`}
						>
							<li style={{ background: '#f6bd60' }}>
								<SliderItem item={item} setIsLoading={setIsLoading} />
							</li>
						</Link>
					))}
				<div className="sliderFon"></div>
			</ul>
							</ErrorBoundary>
		</>
	);
};

export default Slider;
//ГОТОВО