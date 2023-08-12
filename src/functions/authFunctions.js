export const isAuthFunc = () => {
	let isLogged;
	const cookiesString = document.cookie;
	const cookiesArray = cookiesString.split(';');
	const userCookie = cookiesArray.find((cookie) => cookie.trim().startsWith('user='));
	if (userCookie == undefined) {
		isLogged = false;
	}
	if (userCookie) {
		isLogged = true;
		let userCookieValue = userCookie.split('=')[1];
		let indexOfcav = userCookieValue.lastIndexOf('}');
		let username;
		let userCookieValueNew = userCookieValue.substring(indexOfcav + 1, -userCookieValue.length);
		try {
			const userValue = JSON.parse(decodeURIComponent(userCookieValueNew));
			username = userValue.name;
			let id = userValue.id;
			return { user: username, isAuth: isLogged, id: id };
		} catch (error) {
			console.error('Ошибка разбора куки user:', error);
		}
	}
	return { isAuth: isLogged };
};

export const exitFromAccount = () => {
	document.cookie = 'user' + '=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/';
	console.log('dkdk');
	return { isAuth: false };
};
