import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Layout from "./components/layout/Layout";

import "./app.css";

const App = () => {
  return (
    <Router>
      <Layout />
    </Router>
  );
};

export default App;
