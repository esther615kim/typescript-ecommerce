
import React from 'react';


const DynamicLandingPage = React.lazy(() => import('./pages\LandingPage'));
const DynamicIndex = React.lazy(() => import('./pages\ProductsPage\index'));
const DynamicId = React.lazy(() => import('./pages\ProductsPage\[id]'));


export const routes = [
  {
    path: '/',
    element: <Outlet />,
    children: [
      { path: 'C:\LandingPage', element: <DynamicLandingPage />, },
      { path: 'C:\ProductsPage', element: <DynamicIndex />, index: true},
      { path: 'C:\ProductsPage\:id', element: <DynamicId />, },
    ]
  }
]

export const pages = [
  { route: 'C:\LandingPage' },
  { route: 'C:\ProductsPage' },
  { route: 'C:\ProductsPage\:id' },
]
