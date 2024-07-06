"use client";

import Link from "next/link";
import React from "react";
import { FaHome } from "react-icons/fa";

const MobileMenu = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const onClickHandler = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <div>
      <div
        className="flex flex-col gap-1 cursor-pointer"
        onClick={onClickHandler}
      >
        <div
          className={`w-6 h-1 bg-slate-500 ${
            isOpen ? "rotate-45" : ""
          } origin-left ease-in-out duration-500`}
        />
        <div
          className={`w-6 h-1 bg-slate-500 ${
            isOpen ? "opacity-0" : ""
          }  ease-in-out duration-500`}
        />
        <div
          className={`w-6 h-1 bg-slate-500 ${
            isOpen ? "-rotate-45" : ""
          } origin-left ease-in-out duration-500`}
        />
      </div>
      {isOpen && (
        <div className="absolute top-24 left-0 w-full h-cal(100vh-96px) bg-white flex flex-col items-center justify-center gap-8 z-10 text-2xl">
          <Link href="/" className="flex gap-1">
            <FaHome className="text-3xl text-slate-300" />
            Home
          </Link>
          <Link href="/">Friends</Link>
          <Link href="/">Groups</Link>
          <Link href="/">Stories</Link>
          <Link href="/profile">Profiles</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/">Login</Link>
        </div>
      )}
    </div>
  );
};

export default MobileMenu;
