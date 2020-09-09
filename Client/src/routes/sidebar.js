/**
 * ⚠ These are used just to render the Sidebar!
 * You can include any link here, local or external.
 *
 * If you're looking to actual Router routes, go to
 * `routes/index.js`
 */
const routes = [
  {
    path: '/app/dashboard', // the url
    icon: 'HomeIcon', // the component being exported from icons/index.js
    name: 'Home', // name that appear in Sidebar
  },
  {
    path: '/app/chat',
    icon: 'ChatIcon',
    name: 'Chat',
  },
  {
    path: '/app/cards',
    icon: 'CardsIcon',
    name: 'Cards',
  },
  {
    path: '/app/map',
    icon: 'ChartsIcon',
    name: 'GoogleMap',
  },

  {
    path: '/app/diff',
    icon: 'ModalsIcon',
    name: 'Diff-viewer',
  },
  {
    path: '/app/events',
    icon: 'TablesIcon',
    name: 'Events',
  },
  {
    path: '/app/tools',
    icon: 'PagesIcon',
    name: 'What I use',
  },
  {
    path: '/app/contact',
    icon: 'WeixinIcon',
    name: 'Contact',
  },
]

export default routes
