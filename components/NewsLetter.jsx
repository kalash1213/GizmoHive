"use client";

import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const NewsLetter = () => {
  const [email, setEmail] = useState("");

  const validateEmail = (email) => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
  };

  const handleSubscribe = () => {
    if (!email) {
      toast.error("Please enter an email.");
      return;
    }

    if (!validateEmail(email)) {
      toast.error("Please enter a valid email.");
      return;
    }

    toast.success("Successfully subscribed!");
    setEmail(""); // Clear input field
  };

  return (
    <div className="flex flex-col items-center justify-center text-center space-y-2 pt-8 pb-14">
      <Toaster position="top-center" reverseOrder={false} />
      <h1 className="md:text-4xl text-2xl font-medium">
        Subscribe now & get 20% off
      </h1>
      <p className="md:text-base text-gray-500/80 pb-8">
        Stay updated with our latest news and offers.
      </p>
      <div className="flex items-center justify-between max-w-2xl w-full md:h-14 h-12">
        <input
          className="border border-gray-500/30 rounded-md h-full border-r-0 outline-none w-full rounded-r-none px-3 text-gray-500"
          type="email"
          placeholder="Enter your email id"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button
          className="md:px-12 px-8 h-full text-white bg-orange-600 rounded-md rounded-l-none"
          onClick={handleSubscribe}
        >
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default NewsLetter;
