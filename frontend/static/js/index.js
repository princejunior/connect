// console.log('JS is loaded');
import Dashboard from './views/Dashboard.js';
import Posts from './views/Posts.js';
import Settings from './views/Settings.js';
import Login from './views/user/Login.js';
import Profile from './views/user/Profile.js';

const navigateTo = (url) => {
  history.pushState(null, null, url);
  router();
};

const router = async () => {
  const routes = [
    {
      path: '/',
      view: Dashboard,
      //    () => console.log('Viewing Dashboard'),
    },
    {
      path: '/posts',
      view: Posts,
      //   () => console.log('Viewing Posts'),
    },
    {
      path: '/settings',
      view: Settings,
      //   () => console.log('Viewing Settings'),
    },
    {
      path: '/profile',
      view: Profile,
      //    () => console.log('Viewing Dashboard'),
    },
    {
      path: '/login',
      view: Login,
      //    () => console.log('Viewing Dashboard'),
    },
  ];

  //Test each route with potential match
  const potentialMatches = routes.map((route) => {
    return {
      route: route,
      isMatch: location.pathname === route.path,
    };
  });
  let match = potentialMatches.find((potentialMatch) => potentialMatch.isMatch);

  if (!match) {
    match = {
      route: routes[0],
      isMatch: true,
    };
  }

  const view = new match.route.view();

  document.querySelector('#app').innerHTML = await view.getHtml();

  // console.log(match.route.view);
};

window.addEventListener('popstate', router);

document.addEventListener('DOMContentLoaded', () => {
  document.body.addEventListener('click', (e) => {
    if (e.target.matches('[data-link')) {
      e.preventDefault();
      navigateTo(e.target.href);
    }
  });
  router();
});
