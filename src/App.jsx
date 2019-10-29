import React from "react";
import "./App.scss";
import { ApolloProvider } from "@apollo/react-hooks";
import client from "./client";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import AllJobs from "./routes/AllJobs/AllJobs";
import JobPage from "./routes/JobPage/JobPage";
import Home from "./routes/Home/Home";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/allJobs" component={AllJobs} />
          <Route exact path="/job/:job_id" component={JobPage} />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;
