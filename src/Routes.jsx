import { lazy, Suspense } from 'react';
import LoadingScreen from './components/LoadingScreen';
import { Counter } from './store/auth/auth';

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

// working seperate for private and public
const Routes = () => {
    return [...authRoutes];
};

const publicRoutes = [
    {
        path: 'home',
        element: <Home />,
    },
];
const authRoutes = [
    {
        path: '/',
        element: <Registration />,
    },
    {
        path: '*',
        element: <Error />,
    },
    {
        path: 'redux',
        element: <Counter />,
    },
    ...publicRoutes,
];

export default Routes;
