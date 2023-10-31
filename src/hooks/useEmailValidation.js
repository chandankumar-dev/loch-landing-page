import { useState, useEffect } from "react";

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
    } else {
      setError("Email is invalid");
    }
  };
  return { error, handleSubmit };
}
