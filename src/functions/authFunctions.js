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
	return { isAuth: false };
};


export const login=(username, id)=> {
	let expirationDate = new Date();
	expirationDate.setTime(expirationDate.getTime() + (7 * 24 * 60 * 60 * 1000));
	document.cookie = `user=${JSON.stringify({
	  name: username,
	  isLogged: true,
	  id: id
	})}; expires=${expirationDate.toUTCString()}`;
}

function checkRate(value){
    if(value==0){
        return 5
    }
    if(value==2){
        return 4
    }
    if(value==4){
        return 3
    }
    if(value==6){
        return 2
    }
    if(value==8){
        return 1
    }
    
    return 0
    }
export const rating=(rate)=> {
return checkRate(rate)
}