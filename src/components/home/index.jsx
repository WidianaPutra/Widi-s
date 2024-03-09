"use client";

import "@/styles/home.css";
import HomeParallax from "@/parallax/home";

export default function Home() {
  let title = "Widi's Hotel";
  HomeParallax();
  return (
    <div className="overflow-hidden f-contain-home">
      <div className="container-contain-home">
        <h1 className="text-white">{title}</h1>
        <div className="button flex w-full justify-center items-center">
          <button>Book Now</button>
          <button>View</button>
        </div>
      </div>
    </div>
  );
}
