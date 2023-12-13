"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { TbExternalLink, TbLink } from "react-icons/tb";

function Footer() {
  return (
    <div className="flex items-center gap-10 py-16">
      <Link
        className="text-sm font-medium hover:text-slate-200 ease-in-out transition-all duration-500"
        href="https://www.usinakenes.dev"
      >
        <p className="inline-flex gap-1 items-center">Check me out<TbExternalLink /></p>
      </Link>
      <p
        className="flex items-center text-sm font-medium ease-in-out transition-all duration-500"
      >
        <span className="pr-2">Made by</span>
        <span className="font-medium text-slate-200">usinakenes</span>
      </p>
      <Link
        href="https://github.com/"
        className="flex items-center text-sm font-medium hover:text-slate-200 ease-in-out transition-all duration-500"
      >
        <p className="inline-flex gap-1 items-center">Source Code Here<TbExternalLink /></p>
      </Link>
    </div>
  );
}

export default Footer;