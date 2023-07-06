import React from 'react'
import { useRoutes } from "react-router-dom";
import DashboardTasks from './DashboardTasks';
import AboutPage from './AboutPage';
import DashboardMessages from './DashboardMessages';


const Dashboard = React.lazy(() => import('./Dashboard'));

export default function MyRoutes() {
    
    let element = useRoutes([
        {
          path: "/",
          element: <Dashboard />,
          children: [
            {
              path: "messages",
              element: <DashboardMessages />,
            },
            { path: "tasks", element: <DashboardTasks /> },
          ],
        },
        { path: "team", element: <AboutPage /> },
      ]);
    
      return element;
}
