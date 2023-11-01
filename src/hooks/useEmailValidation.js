import { useState } from "react";

export default function useEmailValidation(email) {
  const [error, setError] = useState(null);

  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    setError(null);

    if (isValidEmail(email)) {
      console.log("The email is valid");
      window.open("https://app.loch.one/welcome", "_blank");
    } else {
      setError("Please enter a valid email");
    }
  };
  return { error, handleSubmit };
}
