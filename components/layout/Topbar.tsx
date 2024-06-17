"use client";

import { UserButton } from "@clerk/nextjs";
import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { navLinks } from "@/lib/constants";

const Topbar = () => {
  const [dropdownMenu, setDropdownMenu] = useState(false);
  const pathname = usePathname();
  return (
    <div className="top-0 w-full sticky px-8 py-4 flex justify-between items-center bg-blue-2 shadow-xl lg:hidden">
      <Image src="/logo-takoo.png" alt="logo" width={150} height={70} />

      <div className="flex gap-8 max-md:hidden">
        {navLinks.map((link) => (
          <Link
            key={link.label}
            href={link.url}
            className={`flex items-center gap-4 text-body-medium ${
              pathname === link.url ? "text-blue-1" : "text-gray-1"
            }`}
          >
            <span>{link.label}</span>
          </Link>
        ))}
      </div>

      <div className="relative flex gap-4 items-center">
        <Menu
          className="cursor-pointer md:hidden"
          onClick={() => setDropdownMenu(!dropdownMenu)}
        />
        {dropdownMenu && (
          <div className="absolute top-10 right-6 min-w-[180px] bg-white flex flex-col shadow-xl rounded-lg p-2 gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.url}
                className={`flex items-center gap-4 text-body-medium ${
                  pathname === link.url ? "text-blue-1" : "text-gray-1"
                }`}
              >
                {link.icon}
                <span>{link.label}</span>
              </Link>
            ))}
          </div>
        )}
        <UserButton />
      </div>
    </div>
  );
};

export default Topbar;
