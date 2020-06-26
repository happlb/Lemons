import React from "react";
import { Route } from "react-router-dom";
import Header from "./shared/Header";
import HomePage from "./home/HomePage";
import SearchRecipiePage from "./searchRecipie/SearchRecipiePage";

function App() {
  return (
    <div className="App">
      <Header />
      <Route exact path="/" component={HomePage} />
      <Route path="/searchRecipie" component={SearchRecipiePage} />
    </div>
  );
}

export default App;
