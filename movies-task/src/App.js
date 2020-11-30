import "./App.css";
import React from "react";
import { Header } from "./components/Header/Header";
import { Fragment } from "react";
import { MoviesContainer } from "./components/MoviesContainer/MoviesContainer";
import { Footer } from "./components/Footer/Footer";
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";

const App = () => {
  return (
    <Fragment>
      <Header />
      <ErrorBoundary>
        <MoviesContainer />
      </ErrorBoundary>
      <Footer />
    </Fragment>
  );
};

export default App;
