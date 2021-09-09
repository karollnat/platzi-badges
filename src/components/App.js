import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import BadgeNew from "../pages/BadgeNew";
import Badges from "../pages/Badges";
import Layout from "./Layout";
import NotFound from "../pages/NotFound";
import BadgeHome from "../pages/BadgeHome";
import BadgeEdit from "../pages/BadgeEdit";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/badges" component={Badges} />
          <Route exact path="/badges/new" component={BadgeNew} />
          <Route exact path="/home" component={BadgeHome} />
          <Route exact path="/badges/:badgeId/edit" component={BadgeEdit} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
