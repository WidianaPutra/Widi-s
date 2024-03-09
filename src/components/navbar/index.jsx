"use client";

import Link from "next/link";
import Image from "next/image";
import $ from "jquery";
import { useState } from "react";
import menu from "@/assets/icons/menu.svg";
import x from "@/assets/icons/x.svg";
import "@/styles/navbar.css";
import "@/parallax/navbar.js";

export default function Navbar() {
  let title = "Widi's Hotel";

  const Open = () =>
    $(".container-navbar").css({ transform: "translateX(0%)" });
  const Close = () =>
    $(".container-navbar").css({ transform: "translateX(-100%)" });

  return (
    <>
      <Image
        src={menu}
        width={30}
        height={30}
        alt={``}
        className="fixed cursor-pointer left-2 top-2"
        onClick={Open}
      />
      <div className="container-navbar fixed">
        <div className="items-center flex justify-center p-2">
          <Image
            src={x}
            width={30}
            height={30}
            alt={``}
            className="absolute left-2 cursor-pointer"
            onClick={Close}
          />
          <h1 className="text-center">{title}</h1>
        </div>
        <ul className="h-screen flex flex-col items-center justify-evenly">
          <li>
            <Link href="">
              <p>Home</p>
            </Link>
          </li>
          <li>
            <Link href="">
              <p>About</p>
            </Link>
          </li>
          <li>
            <Link href="">
              <p>Gallery</p>
            </Link>
          </li>
          <li>
            <Link href="">
              <p>Facillity</p>
            </Link>
          </li>
          <li>
            <Link href="">
              <p>Gallery</p>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
