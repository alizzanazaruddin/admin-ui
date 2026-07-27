import React from "react";
import React, { useState } from "react";

const Form = () => {
    const [email, setEmail] = useState("cobaemail");
    const [password, setPassword] = useState("cobapassword");

    console.log(email);
    console.log(password);
    console.log("-");

  return (
    <div className="p-4">
      <form>
        Email :<input type="text" id="email" name="email" className="border" />
        <br />
        Password :
        <input type="text" id="password" name="password" className="border" />
      </form>
    </div>
  );
};

export default Form;