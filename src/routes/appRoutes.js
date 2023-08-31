import {Route, Routes, Navigate}  from "react-router-dom"
import { HOMEPAGE_ROUTE, REGISTER_ROUTE, LOGIN_ROUTE, USER_PAGE_ROUTE, ACCOUNT_ROUTE, CATALOGUE_PAGE_ROUTE,
     CATALOGUE_PAGE_ITEM_ROUTE,  ADD_ROUTE, TOVAR_INFO_PAGE_ROUTE, PRODUCTS_PAGE_ROUTE,
      FOUND_PAGE
 } from "./consts.js";
import RegistrationWebPage from "../pages/registrationWebPage/registrationWebPage.js";
import Homepage from "../pages/homepage/homepage.js";
import LoginPage from "../pages/loginPage/loginPage.js";
import CataloguePage from "../pages/cataloguePage/cataloguePage.js";
//import CataloguePageItem from "../pages/cataloguePageItem/cataloguePageItem.js";
//import AddPurchase from "../components/addPurchase/addPurchase.js";
import TovarInfoPage from "../pages/tovarInfoPage/tovarInfoPage.js";
import ProductsPage from "../pages/productsPage/productsPage.js";
import UserPage from "../pages/userPage/userPage.js";
import FoundPage from "../pages/foundPage/foundPage.js";
import {  useState } from "react";
import { useDispatch } from "react-redux";
import { isAuthFunc } from "../functions/authFunctions.js";
import { lazy, Suspense } from "react";
//const Homepage=lazy(()=> import('../pages/homepage/homepage.js'))
const publicRoutes=[
 
    {
        path: LOGIN_ROUTE,
        Component: LoginPage
    },
    {
        path: HOMEPAGE_ROUTE,
        Component: Homepage
    },
    {
        path: REGISTER_ROUTE,
        Component: RegistrationWebPage
    },
    {
        path: USER_PAGE_ROUTE,
        Component: UserPage
    },
    {
        path: ACCOUNT_ROUTE,
        Component: UserPage
    },
    {
        path: CATALOGUE_PAGE_ROUTE,
        Component: CataloguePage
    },

    {
        path: TOVAR_INFO_PAGE_ROUTE,
        Component: TovarInfoPage
    },
    {
        path: PRODUCTS_PAGE_ROUTE,
        Component: ProductsPage
    },
    {
        path: FOUND_PAGE,
        Component: FoundPage
    }
  
]
 const privateRoutes=[
   
    {
        path: HOMEPAGE_ROUTE,
        Component: Homepage
    },
  
    {
        path: USER_PAGE_ROUTE,
        Component: UserPage
    },
    {
        path: ACCOUNT_ROUTE,
        Component: UserPage
    },
    {
        path: CATALOGUE_PAGE_ROUTE,
        Component: CataloguePage
    },
 
    {
        path: TOVAR_INFO_PAGE_ROUTE,
        Component: TovarInfoPage
    },
    {
        path: PRODUCTS_PAGE_ROUTE,
        Component: ProductsPage
    },
    {
        path: FOUND_PAGE,
        Component: FoundPage
    }
]


/*
const AppRoutes = ({ user, setUser }) => {
    return user ? (
      <Routes>
        {privateRoutes.map(({ path, Component }) => (
          <Route
            key={path}
            path={path}
            element={<Component setUser={setUser} />} // Передача setUser в компонент
            exact={true}
          />
        ))}
  
        <Route path="*" element={<Navigate replace to={HOMEPAGE_ROUTE} />} />
      </Routes>
    ) : (
      <Routes>
        {publicRoutes.map(({ path, Component }) => (
          <Route
            key={path}
            path={path}
            element={<Component setUser={setUser} />} // Передача setUser в компонент
            exact={true}
          />
        ))}
  
        <Route path="*" element={<Navigate replace to={HOMEPAGE_ROUTE} />} />
      </Routes>
    );
  };
  

export default AppRoutes */




const AppRoutes=({user, setUser})=> {
    return user ?  
    (
        <Routes>

{privateRoutes.map(({path, Component})=>( <Route  key={path} path={path} element={<Component setUser={setUser} user={user} />} exact={true} />)

    
)}

<Route path="*" element={<Navigate replace to={HOMEPAGE_ROUTE} />} />  

        </Routes>
    )
    :
    (
        <Routes>
{publicRoutes.map(({path, Component})=> (<Route   key={path} path={path} element={<Component setUser={setUser} user={user} />} exact={true} />)
)}

<Route path="*" element={<Navigate replace to={HOMEPAGE_ROUTE} />} /> 
    
        </Routes>
    )
};
export default AppRoutes


