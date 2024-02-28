import React from "react";
import Logo from "./Logo";
import Link from "next/link";
import { navLinks } from "@/constants/nav-links";
import MobileNav from "./MobileNav";

const Navbar = () => {
  return (
    <header className="bg-stone-950 text-[#eee] backdrop-blur-md z-30">
      <div className="container py-6 flex justify-between items-center transition-all">
        <Logo />

        <nav className="hidden md:flex gap-8 capitalize">
          {navLinks.map((link, index) => (
            <Link
              key={index}
              href={link === "home" ? "/" : `${link}`}
              className="text-sm font-semibold tracking-wide text-slate-200 hover:text-pink-700 hover:ring-pink-700"
            >
              {link}
            </Link>
          ))}
        </nav>

        <MobileNav />
      </div>
    </header>

  );
};

export default Navbar;