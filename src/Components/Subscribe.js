import React, { useState, useEffect, useRef } from "react";
import SubscribeForm from "./SubscribeForm";

export default function Subscribe({ showForm, setShowForm }) {
  const subscribeContainerRef = useRef(null);
  const formBottomRef = useRef(null);

  useEffect(() => {
    if (showForm) {
      const subscribeForm = document.getElementById("subscribe-form");
      if (subscribeForm) {
        const { top } = subscribeForm.getBoundingClientRect();
        window.scrollTo({ top, behavior: "smooth" });
      }
    }
  }, [showForm]);

  const handleSubscribe = () => {
    setShowForm(true);
  };

  const handleX = () => {
    setShowForm(false);
  };

  return (
    <>
      <div
        className="subscribe"
        ref={subscribeContainerRef}
        id="subscribe-component"
      >
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
          <div className="subscribe-form" id="subscribe-form">
            <div className="subscribe-form-header">
              <h1 onClick={handleX} className="close">
                <i className="fa-solid fa-xmark"></i>
              </h1>
            </div>
            <SubscribeForm setShowForm={setShowForm} />
          </div>
        )}
      </div>
    </>
  );
}
