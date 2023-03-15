import { Amplify, Auth } from 'aws-amplify'
// import {  } from 'aws-amplify';
import awsExports from "./aws-exports";
import { useState } from 'react';

Amplify.configure(awsExports);

const App = () => {
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [verificationCode,setVerificationCode] = useState('');
  const [signIN,setSignIN] = useState(false);


  const handleClick = async () => {
    console.log(email, password)
      try {
    await Auth.signUp({
      username: email,
      password: password,
      attributes: {
    email: email
  }
     })
    
  } catch (err) { console.log('error in sign up', { err }); }
  }

async function confirmSignUp() {
  try {
    await Auth.confirmSignUp(email, verificationCode);
    signIn()
  } catch (err) { console.log('error in verification in',{ err }); }
}
/* Sign in function */
async function signIn() {
  try {
    await Auth.signIn(email, password);
    setSignIN(true)
  } catch (err) { console.log('error in sign in',{ err }); }
}

  return (
    <div className="">
   {signIN ? <div className=""> welcome bro </div> 
    :<div>
      <input value={email} onChange={(event) => setEmail(event.target.value)} />
      <input value={password} onChange={(event) => setPassword(event.target.value)} />
      <button onClick={()=> handleClick()} >sign up</button>

      <input value={verificationCode} onChange={(event) => setVerificationCode(event.target.value)} />
      <button onClick={()=> confirmSignUp()} > confirm sign up</button>

    </div>}
    </div>
  )
}

export default App