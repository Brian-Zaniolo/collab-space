import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import SidebarHome from '../../components/sidebar/SidebarHome';
import './style/home.css';
import { MdDashboard } from 'react-icons/md';

const sidebarStructure = {
    header: [
        {
            title: 'Bacheche',
            icon: <MdDashboard />,
            route: '/',
        },
    ],
    spaces: [
        {
            title: 'Workspace 1',
            icon: <MdDashboard />,
            route: '/1',
        },
        {
            title: 'Workspace 2',
            icon: <MdDashboard />,
            route: '/2',
        },
        {
            title: 'Workspace 3',
            icon: <MdDashboard />,
            route: '/3',
        },
    ],
};
const Home = () => {
    return (
        <div className="home__container">
            <SidebarHome structure={sidebarStructure} />
            <div className="home__content">
                <RouterProvider router={homeRouter} />
            </div>
        </div>
    );
};

export default Home;

export const homeRouter = createBrowserRouter([
    {
        path: '/',
        element: <h1>home1</h1>,
    },
    {
        path: '/1',
        element: <h1>home2</h1>,
    },
    {
        path: '/2',
        element: <h1>home3</h1>,
    },
    {
        path: '/3',
        element: <h1>home4</h1>,
    },
]);
