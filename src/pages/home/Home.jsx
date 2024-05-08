import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import SidebarHome from '../../components/sidebar/SidebarHome';
import './style/home.css';
import { MdDashboard } from 'react-icons/md';
import BoardsHome from '../bacheche_home/BoardsHome';
import WorkspaceBoards from '../workspace_boards/WorkspaceBoards';
import MemberManagementPage from '../member_management_page/MemberManagementPage';
import React from 'react';

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
            id: 1,
            title: 'Workspace 1',
            icon: <MdDashboard />,
            route: `/workspaces/1`,
        },
        {
            id: 2,
            title: 'Workspace 2',
            icon: <MdDashboard />,
            route: '/2',
        },
        {
            id: 3,
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
        element: <BoardsHome />,
    },
    {
        path: '/workspaces/:id',
        element: <WorkspaceBoards />,
    },
    {
        path: '/workspaces/:id/members',
        element: <MemberManagementPage />,
    },
    {
        path: '/3',
        element: <h1>home4</h1>,
    },
]);
