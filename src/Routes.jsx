import { lazy, Suspense } from 'react';
import LoadingScreen from './components/LoadingScreen';

const Loadable = (Component) => (props) => {
    return (
        <Suspense fallback={<LoadingScreen />}>
            <Component {...props} />
        </Suspense>
    );
};

const Registration = Loadable(lazy(() => import('./pages/RegistrationPage')));
const Home = Loadable(lazy(() => import('./pages/Home')));
const Error = Loadable(lazy(() => import('./components/Error')));
const Login = Loadable(lazy(() => import('./pages/LoginPage')));
// working seperate for private and public
const Routes = () => {
    return [...authRoutes];
};

const publicRoutes = [
    {
        path: 'dashboard',
        element: <Home />,
    },
];
const authRoutes = [
    {
        path: '/',
        element: <Registration />,
    },
    {
        path: '/login',
        element: <Login />,
    },
    {
        path: '*',
        element: <Error />,
    },
    ...publicRoutes,
];

export default Routes;
