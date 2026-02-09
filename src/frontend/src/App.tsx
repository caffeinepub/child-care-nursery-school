import { RouterProvider, createRouter, createRoute, createRootRoute } from '@tanstack/react-router';
import SiteLayout from './components/layout/SiteLayout';
import Home from './pages/Home';
import LearnMore from './pages/LearnMore';
import SpecialEvent from './pages/SpecialEvent';

const rootRoute = createRootRoute({
  component: SiteLayout,
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: Home,
});

const learnMoreRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/learn-more',
  component: LearnMore,
});

const specialEventRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/special-event',
  component: SpecialEvent,
});

const routeTree = rootRoute.addChildren([
  indexRoute,
  learnMoreRoute,
  specialEventRoute,
]);

const router = createRouter({ routeTree });

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  return <RouterProvider router={router} />;
}
