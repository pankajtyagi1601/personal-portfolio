"use client";

import React from "react";
import { useDarkMode } from "@/hooks/useDarkMode";
import { BackgroundBeamsWithCollision } from "./ui/background-beams-with-collision";
import Hero from "./Hero";
import { NavbarDemo } from "./Navbar";
import { HoverBorderGradient } from "./ui/hover-border-gradient";

const Conatiner = () => {
  const { isDark, toggleDarkMode } = useDarkMode();

  return (
    <div className="min-h-screen border-2 border-red-500">
      <div className="flex items-center justify-center">
        <button
          onClick={toggleDarkMode}
          className="flex items-start justify-start rounded border border-gray-400 p-2 text-center dark:border-gray-200"
        >
          {isDark ? "🌙 Dark" : "☀️ Light"}
        </button>
        <div className="border-2 border-teal-700">Something</div>
      </div>

      <div className="h-[1500px] border-2 border-purple-500">
        <div className="flex items-center justify-center text-center">
          <HoverBorderGradient
            containerClassName="w-full"
            className="rounded-xl"
          >
            <NavbarDemo />
          </HoverBorderGradient>
        </div>
        <BackgroundBeamsWithCollision>
          <section className="container mx-auto border-b border-neutral-900 px-4 pt-18 pb-12 sm:px-20 lg:pb-16">
            <Hero></Hero>
          </section>
        </BackgroundBeamsWithCollision>
      </div>
    </div>
  );
};

export default Conatiner;
