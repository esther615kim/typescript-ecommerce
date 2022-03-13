import React, { lazy } from 'react';

const Index = React.lazy(() => import('./pages/index'));
import Layout from './pages/_layout';
import ProductList from './pages/products/index';
import DetailPage from './pages/products/[id]';

export const routes = [
    {
        path: '/',
        element: <Layout />,
        children: [
            { path: '/', element: <Index />, index: true },
            { path: '/products', element: <ProductList />, index: true },
            { path: '/products/:id', element: <DetailPage />, index: true },
        ],
    },
];

export const pages = [{ route: '/' }, { route: '/products' }, { route: '/products/:id' }];
