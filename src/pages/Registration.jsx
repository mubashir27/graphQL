import { Fragment, useState } from "react";
import Input from "../components/Input/Input";

const Registration = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Fragment className='' >
      <h2 className="text-blue-700 text-2xl font-bold ">Sign Up</h2>
      <div className="grid gap-1 mb-6 md:grid-cols-2">
        {/* Sign UP page */}
        <Input setData={setEmail} data={email} placeholder={"email"} />
        <Input setData={setPassword} data={password} placeholder={"password"} />
      </div>
    </Fragment>
  );
};

export default Registration;
