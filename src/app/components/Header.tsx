import React from "react";
import Link from "next/link";

export default function Header() {

  return (
    <header className="border-b border-neutral-200">
      <div className="mx-auto max-w-5xl px-4 py-4 flex items-center justify-between">
        <div className="flex flex-row items-center justify-between p-3 md:p-1">
          <Link
            href="/"
            className="flex text-3xl text-black font-medium mb-4 md:mb-0"
          >NEXTPUBLISH
          </Link>
        </div>
        <div
          className={
            "md:flex flex-grow items-center"
          }
        >
          <div className="md:ml-auto md:mr-auto font-4 pt-1 md:pl-14 pl-1 flex flex-wrap items-center md:text-base text-1xl md:justify-center justify-items-start">
            <a className="mr-11 pr-2 cursor-pointer text-gray-600 hover:text-black font-semibold tr04">
              Accueil
            </a>
            <nav>
            <Link
                href="/articles" className="mr-12 md:ml-11 ml-0 cursor-pointer text-gray-600 hover:text-black font-semibold tr04">
              Articles
            </Link>

            <Link
                href="/dashboard" className="mr-5 cursor-pointer text-gray-600 hover:text-black font-semibold tr04">
              Dashboard
            </Link>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}