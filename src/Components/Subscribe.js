import React, { useState } from "react";
import SubscribeForm from "./SubscribeForm";

export default function Subscribe() {
  const [showForm, setShowForm] = useState(false);

  const handleSubscribe = () => {
    setShowForm(true);
  };

  const handleX = () => {
    setShowForm(false);
  };

  return (
    <>
      <div className="subscribe">
        <div className="subscribe-header">
          <h1>Subscribe</h1>
        </div>
        <div className="subscribe-description">
          <p>Subscribe now and claim your free trial period!</p>
        </div>
        {!showForm && (
          <div className="subscribe-form">
            <button onClick={handleSubscribe}>Subscribe!</button>
          </div>
        )}
        {showForm && (
          <div className="subscribe-form">
            <div className="subscribe-form-header">
              <h1 onClick={handleX} class="close">
                <i class="fa-solid fa-xmark"></i>
              </h1>
            </div>
            <SubscribeForm setShowForm={setShowForm} />
          </div>
        )}
      </div>
    </>
  );
}
