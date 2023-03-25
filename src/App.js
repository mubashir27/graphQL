import { Amplify, Auth } from "aws-amplify";
// import {  } from 'aws-amplify';
import awsExports from "./aws-exports";
import { useState } from 'react';
import Routes from './Routes';
import { useRoutes } from 'react-router-dom';

Amplify.configure(awsExports);

const App = () => {
    const content = useRoutes(Routes());

    // const handleClick = async () => {
    //   console.log(email, password);
    //   try {
    //     await Auth.signUp({
    //       username: email,
    //       password: password,
    //       attributes: {
    //         email: email,
    //       },
    //     });
    //   } catch (err) {
    //     console.log("error in sign up", { err });
    //   }
    // };

    // async function confirmSignUp() {
    // try {
    //   await Auth.confirmSignUp(email, verificationCode);
    //   signIn();
    // } catch (err) {
    //   console.log("error in verification in", { err });
    // }
    // }
    // /* Sign in function */
    // async function signIn() {
    //   try {
    //     await Auth.signIn(email, password);
    //     setSignIN(true);
    //   } catch (err) {
    //     console.log("error in sign in", { err });
    //   }
    // }

    return <div className="h-100 w-100  bg-gray-800">{content}</div>;
};

export default App;