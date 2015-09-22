import createBrowserHistory from 'history/lib/createBrowserHistory';
import createLocation  from 'history/lib/createLocation';

if(process.env.__BROWSER__) {
export default createBrowserHistory();
} else {
export default createLocation();
}