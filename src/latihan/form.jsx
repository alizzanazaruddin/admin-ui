import React from "react";
import React, { useState } from "react";
import axios from "axios";

const Form = () => {
    const [email, setEmail] = useState("cobaemail");
    const [password, setPassword] = useState("cobapassword");

    const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        const response = await axios.post(
        "https://jwt-auth-eight-neon.vercel.app/login",
        { email, password },
        );

    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
};

    console.log(email);
    console.log(password);
    console.log("-");

    const fetchGoals = async () => {
    try {
    const token = localStorage.getItem("token");

    const response = await axios.get("https://jwt-auth-eight-neon.vercel.app/goals", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
};

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