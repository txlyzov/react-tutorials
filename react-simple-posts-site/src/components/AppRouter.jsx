import React from 'react';
import { Route, Routes } from 'react-router-dom';
import About from '../pages/About';
import Error from '../pages/Error';
import PostIdPage from '../pages/PostIdPage';
import Posts from '../pages/Posts';
import { routes } from '../routers/routes';

function AppRouter() {
    return (
        <Routes>
            {routes.map(route =>
                <Route path={route.path} element={route.element} exact={route.exact} />
            )}
            <Route path="*" element={<Error />}></Route>
        </Routes>
    );
}

export default AppRouter;