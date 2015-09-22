import createBrowserHistory from 'history/lib/createBrowserHistory';

if(process.env.__BROWSER__) {
  export default createBrowserHistory();
} else {
  export default {};
}