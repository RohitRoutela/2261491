import React from "react";
import UrlForm from "../components/UrlForm";
import UrlList from "../components/UrlList";

const Home = () => (
  <div>
    <h1>Shorten URLs</h1>
    <UrlForm />
    <UrlList />
  </div>
);

export default Home;
