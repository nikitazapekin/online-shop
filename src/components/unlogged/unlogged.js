import './unlogged.scss';
const Unlogged = ({ isUnlogged, setIsUnlogged }) => {
	const handleClick = () => {
		setIsUnlogged(false);
	};
	return (
		<>
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
		</>
	);
};
export default Unlogged;
//ГОТОВО
