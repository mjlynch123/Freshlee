import React from "react";

export default function Features() {
  const features = [
    {
      image:
        "https://images.unsplash.com/photo-1604908554105-088645debe26?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE3fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=400&q=60",
      title: "Easy to Use",
      description:
        "Our app is easy to use and navigate. You can order your meals in a few clicks and have them delivered to your door in no time.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1498557850523-fd3d118b962e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=400&q=60",
      title: "Affordable",
      description:
        "Our meals are affordable and we offer a variety of plans to fit your budget. You can cancel at any time. No questions asked. Try our free trial today!",
    },
    {
      image:
        "https://images.unsplash.com/photo-1521909944782-4aee70b674ee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=400&q=60",
      title: "Healthy",
      description:
        "Our meals are healthy and nutritious. We use only the freshest ingredients. Our meals are never frozen. We offer a variety of meals.",
    },
  ];
  return (
    <>
      <div className="features">
        <div className="features-header">
          <h1>Our Benefits</h1>
        </div>
        <div className="features-description">
          {features.map((feature) => {
            return (
              <div className="feature">
                <div
                  className="feature-image"
                  style={{ backgroundImage: `url(${feature.image})` }}
                ></div>
                <div className="feature-title">
                  <h2>{feature.title}</h2>
                </div>
                <div className="feature-descriptions">
                  <p>{feature.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
