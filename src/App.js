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

{
    /* {signIN ? (
  <div className=""> welcome bro </div>
) : (
  <div>
    <Registration />
    <input placeholder='email' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 " value={email} onChange={(event) => setEmail(event.target.value)} />
<input placeholder='Password' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 " value={password} onChange={(event) => setPassword(event.target.value)} />
<button onClick={()=> handleClick()} >sign up</button>

      <input placeholder='Verification' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 "  value={verificationCode} onChange={(event) => setVerificationCode(event.target.value)} />
<button onClick={()=> confirmSignUp()} > confirm sign up</button>
  </div>
)} */
}