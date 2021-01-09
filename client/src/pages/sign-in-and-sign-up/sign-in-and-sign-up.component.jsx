import React, { lazy, Suspense } from "react";

import Spinner from "../../components/spinner/spinner.component";

import { SignInAndSignUpContainer } from "./sign-in-and-sign-up.styles";

const SignIn = lazy(() => import("../../components/sign-in/sign-in.component"));
const SignUp = lazy(() => import("../../components/sign-up/sign-up.component"));

const SignInAndSignUpPage = () => (
  <SignInAndSignUpContainer>
    <Suspense fallback={<Spinner />}>
      <SignIn />
      <SignUp />
    </Suspense>
  </SignInAndSignUpContainer>
);

export default SignInAndSignUpPage;
