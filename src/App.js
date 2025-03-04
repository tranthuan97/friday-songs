// import './App.css';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import Auth from "./layouts/Auth";
import Admin from "./layouts/Admin";
import CommonLayout from "./layouts/Common";
import FooterComponent from "components/Footer";
import { Affix } from "antd";
import Header from "./components/header";

function App() {
  return (
    <Router>
      <Affix offsetTop={0}>
        <Header />
      </Affix>
      <Switch>
        <Route path="/auth" render={(props) => <Auth {...props} />} />
        <Route path="/admin" render={(props) => <Admin {...props} />} />
        <Route path="/" render={(props) => <CommonLayout {...props} />} />
        <Redirect from="*" to="/" />
      </Switch>
      <FooterComponent />
    </Router>
  );
}

export default App;
