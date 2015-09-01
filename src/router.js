import Router from 'react-router';

export let router;

export default function (routes, cb) {
  router = Router.create({
    routes: routes,
    location: Router.HistoryLocation
  });

  router.run(cb);
}
