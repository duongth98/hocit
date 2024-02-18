import React, { useState } from "react";
function Hero() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log(`Name: ${name}, Email: ${email}`);
    };
  
    return (
      <section className="hero">
        <div className="content">
          <h1>Welcome to Our Landing Page</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eget
            ligula vel nisi tincidunt dapibus.
          </p>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button type="submit">Join Now</button>
          </form>
        </div>
      </section>
    );
  }
  
  export default Hero;