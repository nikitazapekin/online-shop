import Nn from './new.png';
import { ErrorBoundary } from '../errorBoundary/errorBoundary.js';
const SliderItem = ({ item, setIsLoading }) => {
	return (
		<>
		<ErrorBoundary>

			<img src={item.logo} alt="purchase" className="sliderImage" onLoad={() => setIsLoading(false)} />
			<img src={Nn} className="newImage" alt="new" />
			<p className="sliderTitleAnime">
				{item.title} <br />
				{item.price} rub
			</p>
		</ErrorBoundary>
		</>
	);
};
export default SliderItem;
//ГОТОВО