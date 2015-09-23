import createBrowserHistory from 'history/lib/createBrowserHistory';

let history;

if(process.env.__BROWSER__) {
  history = createBrowserHistory();
} else {
  history = {}; // createBrowserHistory is supported only in browser
}

export default history;