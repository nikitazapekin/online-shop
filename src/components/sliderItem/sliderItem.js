import Nn from './new.png';
const SliderItem = ({ item, setIsLoading }) => {
	return (
		<>
			<img src={item.logo} alt="purchase" className="sliderImage" onLoad={() => setIsLoading(false)} />
			<img src={Nn} className="newImage" alt="new" />
			<p className="sliderTitleAnime">
				{item.title} <br />
				{item.price} rub
			</p>
		</>
	);
};
export default SliderItem;
//ГОТОВО