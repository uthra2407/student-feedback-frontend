import React from "react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "John Doe",
      feedback: "This portal has streamlined our feedback collection process.",
    },
    {
      name: "Jane Smith",
      feedback: "A secure and user-friendly platform. Highly recommended!",
    },
  ];

  return (
    <section className="testimonials-section"  style={{ paddingLeft: '20px', paddingRight: '20px',paddingBottom: '20px' }}>
      <h2>What Our Users Say</h2>
      <div className="testimonials">
        {testimonials.map((testimonial, index) => (
          <div className="testimonial-card" key={index}>
            <p>{testimonial.feedback}</p>
            <span>- {testimonial.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
