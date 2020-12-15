import React from "react";

const Signin = (props) => {
  return (
    <div>
      <input
        value={props.username}
        name="username"
        onChange={props.handleChange}
      />
      <input
        type="password"
        name="password"
        value={props.password}
        onChange={props.handleChange}
      />
      <button onClick={props.handleLogin}>Login</button>
    </div>
  );
};

export default Signin;
