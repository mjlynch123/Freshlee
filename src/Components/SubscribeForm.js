import React, { useState } from "react";
import AddressForm from "./AddressForm";

export default function SubscribeForm({ setShowForm }) {
  const [email, setEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showAddress, setShowAddress] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send data to server
    console.log("Submitted email:", email);
    // Reset the form
    setEmail("");
    setConfirmEmail("");
    setFirstName("");
    setLastName("");
    setPassword("");
    setConfirmPassword("");
  };

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const handleConfirmEmailChange = (e) => {
    setConfirmEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleAddress = () => {
    if (
      email &&
      confirmEmail &&
      firstName &&
      lastName &&
      password &&
      confirmPassword
    ) {
      setShowAddress(true);
    } else {
      alert("Please fill in all fields before proceeding.");
    }
  };

  return (
    <div className="subscribe-page">
      <form onSubmit={handleSubmit}>
        {!showAddress && (
          <>
            <div className="names">
              <input
                type="text"
                id="fname"
                value={firstName}
                onChange={handleFirstNameChange}
                placeholder="First Name"
                required
              />
              <input
                type="text"
                id="lname"
                value={lastName}
                onChange={handleLastNameChange}
                placeholder="Last Name"
                required
              />
            </div>
            <div className="email">
              <input
                type="email"
                id="email"
                value={email}
                onChange={handleChange}
                placeholder="Email"
                required
              />

              <input
                type="email"
                id="confirm-email"
                value={confirmEmail}
                onChange={handleConfirmEmailChange}
                placeholder="Confirm Email"
                required
              />
            </div>

            <div className="password">
              <input
                type="password"
                id="password"
                value={password}
                onChange={handlePasswordChange}
                placeholder="Password"
                required
              />

              <input
                type="password"
                id="confirm-password"
                value={confirmPassword}
                onChange={handleConfirmPasswordChange}
                placeholder="Confirm Password"
                required
              />
            </div>
            <div className="form-button">
              <button type="submit" onClick={handleAddress}>
                Next
              </button>
            </div>
          </>
        )}

        {showAddress && <AddressForm setShowAddress={setShowAddress} />}
      </form>
    </div>
  );
}
