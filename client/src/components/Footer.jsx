"use client";

import React from "react";
import { FaLinkedin, FaXTwitter, FaGithub } from "react-icons/fa6";

function Footer() {
  const navLinks = [
    {
      name: "About",
      href: "/about",
    },
    {
      name: "Projects",
      href: "/projects",
    },
    {
      name: "Contact",
      href: "/contact",
    },
  ];

  const socialIcons = [
    {
      name: "X",
      href: "https://x.com/ekron28",
      icon: FaXTwitter,
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/steve-bicko-7b1460334/",
      icon: FaLinkedin,
    },
    {
      name: "GitHub",
      href: "https://github.com/Prometheus-onyx",
      icon: FaGithub,
    },
  ];

  return (
    <footer className="w-full border-t border-gray-200 dark:border-white/10">
      <div className="mx-auto flex max-w-7xl flex-col items-center px-6 py-10 lg:px-8">
        {/* Name */}
        <div className="mb-6 text-center">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Steve Bicko
          </h2>
        </div>

        {/* Navigation */}
        <nav className="mb-6 w-full">
          <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-base font-medium">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="relative text-gray-600 transition-all duration-300 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-gray-900 after:transition-all after:duration-300 hover:after:w-full dark:after:bg-white"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Social Icons */}
        <div className="my-6 flex flex-wrap justify-center gap-4">
          {socialIcons.map((social) => {
            const Icon = social.icon;

            return (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                className="flex h-11 w-11 items-center justify-center rounded-full text-gray-600 transition-all duration-300 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-white/10 dark:hover:text-white"
              >
                <Icon size={26} />
              </a>
            );
          })}
        </div>

        {/* Copyright */}
        <p className="mt-4 text-center text-xs text-gray-500 dark:text-gray-500">
          &copy; {new Date().getFullYear()} Designed with ❤️ by Steve Bicko. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
