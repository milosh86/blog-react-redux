// This is only for case where we need transitions outside of regular react-router cases
// Top level route handlers receive history through props - this.props.history.pushState
// Some other, nested components can use History mixin to use history object, or to manually pass it through props
// There is also Link component, which could be used for transitions
// If history is needed outside of component, we should:
//   - export history object, like in this file
//   - in app.js, import it and use it for Router component
//   - in some other file, where we need history, just import again history.js and use it
//   - Important note: createBrowserHistory cannot be used on server!
import createBrowserHistory from 'history/lib/createBrowserHistory';

let history;

if(process.env.__BROWSER__) {
  history = createBrowserHistory();
} else {
  // or use createMemoryHistory!?
  history = {}; // createBrowserHistory is supported only in browser
}

export default history;