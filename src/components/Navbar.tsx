import Link from "next/link";
import React from "react";
import MobileMenu from "./MobileMenu";
import { FaHome } from "react-icons/fa";

export default function Navbar() {
  return (
    <div className="flex bg-white justify-between items-center h-24 px-4">
      {/* left */}
      <div>
        <Link href="/" className="text-slate-400 text-xl">
          touch<span className="text-slate-900">base</span>
        </Link>
      </div>

      {/* center */}
      <div className="hidden md:flex items-center justify-center text-xs">
        <Link href="/" className="flex gap-2">
          <FaHome className="text-sm text-slate-300" />
          <span>Home</span>
        </Link>
      </div>

      {/* right */}
      <div>
        <MobileMenu />
      </div>
    </div>
  );
}
