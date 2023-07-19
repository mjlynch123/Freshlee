import React from "react";

export default function Home({ handleScroll }) {
  const handleClick = () => {
    handleScroll(); // Call handleSubscribe received as a prop
  };

  const handleHamburger = () => {
    alert("Hamburger clicked!");
  };

  return (
    <>
      <div className="header">
        <div className="hamburger-icon" onClick={handleHamburger}>
          <i class="fa-solid fa-bars"></i>
        </div>
        <div className="header-words">
          <h1>Fresh To Your Door</h1>
          <p>
            Here's to not planning meals every night. Try our one Month free
            trial period and get catered meals to your day daily. Never frozen!
          </p>
          <div className="subscribe-form">
            <button onClick={handleClick}>Subscribe!</button>
          </div>
        </div>
      </div>
    </>
  );
}
