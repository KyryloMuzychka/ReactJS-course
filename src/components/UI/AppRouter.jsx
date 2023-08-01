import React from 'react';
import { Route, Routes } from "react-router-dom";
import { privateRoutes, publicRoutes } from './router/routes';

const AppRouter = () => {
    const isAuth = true;
    return (
        isAuth
            ?
            <Routes>
                {privateRoutes.map(route =>
                    <Route
                        key={route.path}
                        element={route.element}
                        path={route.path}
                        exact={route.exact}
                    />                    
                )}

            </Routes>
            :
            <Routes>
                {publicRoutes.map(route =>
                    <Route
                        key={route.path}
                        element={route.element}
                        path={route.path}
                        exact={route.exact}
                    />
                )}
            </Routes>
    );
};

export default AppRouter;