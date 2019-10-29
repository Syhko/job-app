import React from "react";
import "./App.scss";
import { ApolloProvider } from "@apollo/react-hooks";
import client from "./client";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import AllJobs from "./routes/AllJobs/AllJobs";
import Home from "./routes/Home/Home";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/allJobs" component={AllJobs} />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;
