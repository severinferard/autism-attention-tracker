import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HomePage } from './pages/Home.page';
import { FeedsPage } from './pages/Feeds.page';
import { FeedPage } from './pages/Feed.page';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/feeds',
    element: <FeedsPage />,
  },
  {
    path: '/feed/:id',
    element: <FeedPage />,
  },
]);

export function Router() {
  return <RouterProvider router={router} />;
}
