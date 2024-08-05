import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="flex items-center justify-between h-[80px] bg-black px-[100px] z-50  md:fixed top-0 w-full ">
      <Link href="/"  className="p-2 font-extrabold text-4xl  font-Pacifico text-white flex">
        Sukker<span className="text-green-600">Pro</span>
      </Link>
      <div className="text-white flex items-center justify-center gap-3 font-Pacifico font-light">
        <p>
          Players
        </p>
        <p>
          Teams
        </p>
        <p>
          Fixtures
        </p>
      </div>
    </div>
  );
};

export default Header;
