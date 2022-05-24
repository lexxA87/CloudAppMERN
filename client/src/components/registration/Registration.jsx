import React, { useState } from "react";
import Input from "../../utils/input/Input";
import { registration } from "../../actions/user";

const Registration = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      <div>Registration</div>
      <Input
        value={email}
        setValue={setEmail}
        type="text"
        placeholder="enter your email"
      />
      <Input
        value={password}
        setValue={setPassword}
        type="password"
        placeholder="enter your password"
      />
      <button onClick={() => registration(email, password)}>Log in</button>
    </div>
  );
};

export default Registration;
