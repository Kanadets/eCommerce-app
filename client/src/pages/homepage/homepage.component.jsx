import React, { lazy, Suspense } from "react";

import Spinner from "../../components/spinner/spinner.component";

import { HomePageContainer } from "./homepage.styles";

const Directory = lazy(() =>
  import("../../components/directory/directory.component")
);

const HomePage = () => {
  return (
    <HomePageContainer>
      <Suspense fallback={Spinner}>
        <Directory />
      </Suspense>
    </HomePageContainer>
  );
};

export default HomePage;
