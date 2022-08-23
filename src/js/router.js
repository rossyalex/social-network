import { routes } from './routes/index.js';

export const route = (event) => {
  event = event || window.event;
  event.preventDefault();
  let href = event.target.href;
  if (!href) {
    href = event.target.parentElement.href;
  }
  console.log(href);
  window.history.pushState({}, '', href);
  handleLocation();
};

export const handleLocation = () => {
  const root = document.getElementById('root');
  const path = window.location.pathname;
  console.log(path);
  console.log(routes[path]);
  root.innerHTML = routes[path] || routes.error404;
};
