import React from "react";

const Features = () => {
  const features = [
    {
      title: "User-Friendly Design",
      description: "Easy navigation for students and institutions.",
      icon: "🌟",
    },
    {
      title: "Comprehensive Analytics",
      description: "Institutions can gain deep insights from student feedback.",
      icon: "📊",
    },
    {
      title: "Secure and Confidential",
      description: "Ensures privacy of feedback.",
      icon: "🔒",
    },
    {
      title: "24/7 Support",
      description: "Dedicated support for any queries.",
      icon: "🛠️",
    },
  ];

  return (
    <section className="features-section">
      <h2>Why Use Our Portal?</h2>
      <div className="features">
        {features.map((feature, index) => (
          <div className="feature-card" key={index}>
            <div className="icon">{feature.icon}</div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
