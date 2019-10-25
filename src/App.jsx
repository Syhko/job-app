import React from "react";
import "./App.scss";
import { ApolloProvider } from "@apollo/react-hooks";
import client from "./client";
import Footer from "./components/Navigation/Footer";
import TopNav from "./components/Navigation/TopNav";
import ListContainer from "./components/QueryZone/ListContainer";
import DescriptionContainer from "./components/QueryZone/DescriptionContainer";

const App = () => {
  const [queryParams, setQueryParams] = React.useState([null, null]);
  console.log(queryParams);
  return (
    <ApolloProvider client={client}>
      <div className="container">
        <TopNav />
        <ListContainer handleClick={(...rest) => setQueryParams(rest[0])} />
        {queryParams[0] !== null && (
          <DescriptionContainer
            companySlug={queryParams[1]}
            jobSlug={queryParams[0]}
          />
        )}
        <Footer />
      </div>
    </ApolloProvider>
  );
};

export default App;
