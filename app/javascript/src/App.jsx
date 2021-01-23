import React, { useEffect, useState } from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import { setAuthHeaders } from "apis/axios.js";

import Home from "./Home";
import Report from "./Report";

export default function App({ urls }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setAuthHeaders();
  }, [urls]);

  console.log(urls);
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" render={() => <Home urls={urls} />} />
        <Route exact path="/reports/new" component={Report} />
      </Switch>
    </BrowserRouter>
  );
}
