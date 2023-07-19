import React, { useState, useRef } from "react";
import Home from "./Components/Home";
import Features from "./Components/Features";
import Subscribe from "./Components/Subscribe";
import "./App.css";

function App() {
  const subscribeRef = useRef(null); // Add useRef
  const [showForm, setShowForm] = useState(false);

  const handleScroll = () => {
    setShowForm(true);
    const subscribeComponent = document.getElementById("subscribe-component");
    const subscribeForm = document.getElementById("subscribe-form");
    if (subscribeForm) {
      const { top } = subscribeForm.getBoundingClientRect();
      window.scrollTo({ top, behavior: "smooth" });
    }
  };
  return (
    <div className="App">
      <Home handleScroll={handleScroll} />
      <Features />
      <Subscribe
        subscribeRef={subscribeRef}
        setShowForm={setShowForm}
        showForm={showForm}
      />
    </div>
  );
}

export default App;
