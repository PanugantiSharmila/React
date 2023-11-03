import { useState } from "react";

export const Message = () => {
  const [msg, setMessage] = useState("Welcome to CGG");
  return (
    <div>
      <h1>{msg}</h1>
      <button onClick={() => setMessage("Thank you for subscribing")}>
        Subscribe
      </button>
    </div>
  );
};
