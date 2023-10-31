import React, { useState } from "react";

export default function Signup() {
  const [email, setEmail] = useState("");
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

  return (
    <div className="w-full flex flex-col justify-center items-center">
      <div className="max-w-sm flex flex-col gap-3 px-5">
        <h3 className="text-[40px] text-gray-400">
          Sign up for exclusive access.
        </h3>
        <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
          <input
            className="p-4 border border-gray-300 rounded-md"
            type="text"
            placeholder="Your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            type="submit"
            className="bg-black text-white p-3 rounded-md"
            onClick={() => {}}
          >
            Get started
          </button>
        </form>
        <div>
          {error && <h2 className="text-red-500 text-center">{error}</h2>}
        </div>
        <p className="text-sm text-center">
          You'll receive an email with an invite link to join
        </p>
      </div>
    </div>
  );
}