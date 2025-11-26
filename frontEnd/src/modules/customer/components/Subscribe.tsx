import React, { useState } from "react";
import Button from "../../../components/ui/Button";
import { useLocation } from "react-router-dom";

const Subscribe: React.FC = () => {
  const [email, setEmail] = useState("");
  const isHides = ["/cart", "/place-order", "/orders", "/account"];

  const route = useLocation();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim() === "") {
      alert("Please enter your email address.");
      return;
    }
    alert(`Thank you for subscribing, ${email}! 🎉`);
    setEmail("");
  };
  if (isHides.includes(route.pathname)) return;

  return (
    <section className="max-w-7xl mx-auto flex flex-col items-center justify-center pt-8 pb-16 px-6 bg-white">
      {/* Title */}
      <h2 className="text-2xl font-semibold text-center mb-2">
        Subscribe now & get 20% off
      </h2>

      {/* Subtitle */}
      <p className="text-gray-500 text-center mb-8">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </p>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="flex w-full max-w-md border border-gray-300 rounded overflow-hidden"
      >
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="flex-1 px-4 py-3 outline-none text-gray-700"
        />
        <Button value="Subscribe" />
      </form>
    </section>
  );
};

export default Subscribe;
