import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Main from "../pages/MainPage";
import Product from "../pages/ProductPage";
import RecentList from "../pages/RecentListPage";

function UserRouter() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/recentList" exact component={RecentList} />
          <Route path="/product/:id" exact component={Product} />
          <Route path="/product" exact component={Product} />
        </Switch>
      </Router>
    </div>
  );
}

export default UserRouter;
