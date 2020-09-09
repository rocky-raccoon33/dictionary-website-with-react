import { lazy } from 'react'

// use lazy for better code splitting, a.k.a. load faster
const Dashboard = lazy(() => import('../pages/Dashboard'))
const Diff = lazy(() => import('../pages/Diff'))
const Cards = lazy(() => import('../pages/WordCard'))
const WrappedMap = lazy(() => import('../pages/Map'))
const Contact = lazy(() => import('../pages/Contact'))
const Page404 = lazy(() => import('../pages/404'))
const Chat = lazy(() => import('../pages/Chat'))
const Result = lazy(() => import('../pages/Result'))
const Blank = lazy(() => import('../pages/Blank'))
const Tools = lazy(() => import('../pages/Tools'))
const Profile = lazy(() => import('../pages/Profile'))
const Events = lazy(() => import('../pages/Events'))

/**
 * ⚠ These are internal routes!
 * They will be rendered inside the app, using the default `containers/Layout`.
 * If you want to add a route to, let's say, a landing page, you should add
 * it to the `App`'s router, exactly like `Login`, `CreateAccount` and other pages
 * are routed.
 *
 * If you're looking for the links rendered in the SidebarContent, go to
 * `routes/sidebar.js`
 */
const routes = [
  {
    path: '/dashboard', // the url
    component: Dashboard, // view rendered
  },

  {
    path: '/result:keyword', // the url
    component: Result, // view rendered
  },

  {
    path: '/chat',
    component: Chat,
  },
  {
    path: '/cards',
    component: Cards,
  },

  {
    path: '/map',
    component: WrappedMap,
  },

  {
    path: '/contact',
    component: Contact,
  },

  {
    path: '/events',
    component: Events,
  },

  {
    path: '/diff',
    component: Diff,
  },

  {
    path: '/404',
    component: Page404,
  },

  {
    path: '/blank',
    component: Blank,
  },

  {
    path: '/blank',
    component: Blank,
  },

  {
    path: '/tools',
    component: Tools,
  },

  {
    path: '/profile',
    component: Profile
  }
]

export default routes
