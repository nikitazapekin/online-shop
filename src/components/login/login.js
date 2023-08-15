import './login.scss';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginPost } from '../../redux/reducers/login/loginThunk.js';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../functions/authFunctions.js';
import { clearStore } from '../../redux/reducers/login/loginThunk.js';
const Login = () => {
	const state = useSelector((state) => state.loginReducer);
	const dispatch = useDispatch();
	const [isReg, setIsReg] = useState(false);
	const navigate = useNavigate();
	const [form, setForm] = useState({
		email: '',
		password: '',
	});
	const changeHandler = (event) => {
		setForm({ ...form, [event.target.name]: event.target.value });
	};
	const sendRequest = () => {
		const data = {
			email: form.email,
			password: form.password,
		};
		dispatch(loginPost(data));
	};
	useEffect(() => {
		try {
			if (state.post.id !== undefined && state.post.id !== null) {
				console.log(state.post);
				login(state.post.name, state.post.id);
				navigate(`/user/${state.post.id}`);
				dispatch(clearStore());
			}
			if (state.post === 'is non registered') {
				setIsReg(true);
			}
		} catch (err) {
			console.log(err);
		}
	}, [state.post]);

	return (
		<div className="login">
			<h1>Логин</h1>
			<form className="loginFormElem">
				<input
					required
					name="email"
					onChange={changeHandler}
					type="text"
					className="loginForm registrationItem"
					placeholder="type email"
				/>
				<input
					required
					name="password"
					onChange={changeHandler}
					type="password"
					className="passwordForm registrationItem"
					placeholder="type password"
				/>
				<button
					onClick={(event) => {
						event.preventDefault();
						sendRequest();
					}}
					type="submit"
					className="continue registrationItem"
				>
					continue
				</button>
			</form>
			<Link to={`/register`} style={{ textDecoration: 'none', color: '#fff' }}>
				<h2 className="registrationItem"> or register</h2>{' '}
			</Link>

			<div style={{ display: !isReg ? 'none' : 'block' }} className="registerUserIsLogged">
				Пожалуйста, введите корректные логин и пароль!
			</div>
			<div className="registerrFon"></div>
		</div>
	);
};
export default Login;
//готово