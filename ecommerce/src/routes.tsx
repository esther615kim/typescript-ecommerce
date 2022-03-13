import React, { lazy } from 'react';

const Index = React.lazy(() => import('./pages/index'));
import Layout from './pages/_layout';

export const routes = [
    {
        path: '/',
        element: <Layout />,
        children: [{ path: 'C:/', element: <Index />, index: true }],
    },
];

export const pages = [{ route: 'C:/' }];
