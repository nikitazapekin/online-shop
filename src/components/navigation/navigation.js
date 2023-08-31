import './navigation.scss';
import './responsiveNavigation.scss';
import { Link } from 'react-router-dom';
import Gl from './log.png';
import { useState, useEffect } from 'react';
import { isAuthFunc } from '../../functions/authFunctions.js';
import useDebounce from '../../hooks/debounce.js';
import BurgerMenu from '../burgerMenu/burgerMenu.js';
import { useNavigate } from 'react-router-dom';
import { exitFromAccount } from '../../functions/authFunctions.js';
import debounce from 'lodash/debounce.js';
import { debouncePost } from '../../redux/reducers/debounce/debounceThunk.js';
import { useDispatch, useSelector } from 'react-redux';
const Navigation = () => {
	const dispatch=useDispatch()
	const state=useSelector(state=>state.debounceReducer)
	const navigate = useNavigate();
	const [isLoggedUser, setIsLoggedUser] = useState();
	const [value, setValue] = useState('');
	const [elems, setElems] = useState();
	const [isClicked, setIsClicked] = useState(false);
	const displayStyles = {
		display: isClicked ? 'block' : 'none',
	};
	useEffect(() => {
		try {
			setIsLoggedUser(isAuthFunc());
		} catch (err) {
			console.log(err);
		}
	}, []);
const search = debounce((query) => {
dispatch(debouncePost(query))
	}, 500);
	useEffect(()=> {
	  setElems(state.post)

  }, [state])
  const onChange = (e) => {
	setValue(e.target.value);
	search(e.target.value);
  };

	const handleKeyPress = (event) => {
		if (event.key === 'Enter') {
			navigate(`/foundPage/${value}`);
		}
	};
	const handleClick = () => {
		setIsLoggedUser(exitFromAccount());
		exitFromAccount();
		navigate('/');
	};
	const handleClickIsClicked = () => {
		if (isClicked) {
			setIsClicked(false);
		} else {
			setIsClicked(true);
		}
	};
	return (
		<nav className="navigation">
			{isLoggedUser != undefined && (
				<div className="navigationWrapper">
					<div className="navigationItem">
						<Link to="/" style={{ textDecoration: 'none' }}>
							<img className="logoOfWebPage" alt="logo" src={Gl} />
						</Link>
					</div>
					<div className="navigationItem">
						<Link style={{ textDecoration: 'none', color: '#fff' }} to="/catalogue">
				
							Catalogue
						</Link>
					</div>
					<div className="navigationItem">
						<Link style={{ textDecoration: 'none', color: '#fff' }} to="/products">
						
							Products
						</Link>
					</div>
					<div className="navigationItem">
						<input
							type="search"
							className="searchNavigation"
							placeholder="search"
							value={value}
							onKeyPress={handleKeyPress}
							onChange={onChange}
						/>
						<div className="searchedItems">
							{elems != undefined &&
								value.length !== 0 &&
								elems.slice(0, 5).map((item) => (
									<Link
										style={{ textDecoration: 'none', color: 'black' }}
										to={`/tovarInfo/${item.id}`}
									>
										<div className="searchedItem">{item.title} </div>
									</Link>
								))}
						</div>
					</div>
					<div className="navigationItem">
						{isLoggedUser != undefined && !isLoggedUser.isAuth ? (
							<div className="navigationItemUser">
								<Link to="/register" style={{ textDecoration: 'none' }}>
									<button className="signUpBtn">Sign up</button>
								</Link>
								<Link to="/login" style={{ textDecoration: 'none' }}>
									<button className="signInBtn">Sign in</button>
								</Link>
							</div>
						) : (
							<div
								className="accountNavigation"
								onClick={() => {
									handleClickIsClicked();
								}}
							>
								{isLoggedUser.user != undefined && isLoggedUser.user}
								<div className="accountNavigationItems" style={displayStyles}>
									<div className="accountNavigationItem">
										<Link
											style={{ textDecoration: 'none', color: ' #fff' }}
											to={`/user/${isLoggedUser.id}`}
										>
											Account
										</Link>
									</div>
									<div
										className="accountNavigationItem"
										onClick={() => {
											handleClick();
										}}
									>
										Exit
									</div>
								</div>
							</div>
						)}
					</div>
					<div className="navigationFon"></div>
					<div className="burgerItem">
						<BurgerMenu />
					</div>
				</div>
			)}
		</nav>
	);
};
export default Navigation;

//ГОТОВО