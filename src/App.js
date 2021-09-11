// import './App.css';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'
import Auth from './layouts/Auth';
import Admin from './layouts/Admin';
import CommonLayout from './layouts/Common';

function App() {

  return (
    <Router>
      <Switch>
        <Route path="/auth" render={(props) => <Auth {...props} />} />
        <Route path="/admin" render={(props) => <Admin {...props} />} />
        <Route path="/" render={(props) => <CommonLayout {...props} />} />
        <Redirect from="*" to="/" />
      </Switch>
    </Router>
  );
}

export default App;
