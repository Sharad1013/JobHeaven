import { Facebook, Linkedin, Twitter } from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="border border-gray-200 p-8">
        <div className="container mx-auto flex justify-between items-center">
          <div>
            <h1 className="text-xl font-bold">Job<span className="text-[#6439FF]">Heaven</span> </h1>
            <p className="mb-2 text-lg">
              &copy;{new Date().getFullYear()}. All rights reserved.
            </p>
          </div>
          <div className="flex space-x-4">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400"
            >
              <Twitter size={30} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600"
            >
              <Linkedin size={30} />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-800"
            >
              <Facebook size={30} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
