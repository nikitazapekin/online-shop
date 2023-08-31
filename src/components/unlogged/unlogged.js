import './unlogged.scss';
import { ErrorBoundary } from '../errorBoundary/errorBoundary.js';
const Unlogged = ({ isUnlogged, setIsUnlogged }) => {
	const handleClick = () => {
		setIsUnlogged(false);
	};
	return (
		<>
		<ErrorBoundary>

			{isUnlogged ? (
				<div className="unloggedWrapper">
					<div className="unloggedWindow">
						<h1 className="unloggedText">Вы не вошли в аккаунт</h1>
						<button
							onClick={() => {
								handleClick();
							}}
							className="unloggedOk"
							>
							Ok
						</button>
					</div>
				</div>
			) : (
				<></>
				)}
				</ErrorBoundary>
		</>
	);
};
export default Unlogged;
//ГОТОВО
