import React from "react";
import { HeaderProps, NavigationType } from "./types";
import Link from "next/link";
import Image from "next/image";

const navigation: NavigationType[] = [
  { name: "Apparel", href: "#", id: 1 },
  { name: "Footwear", href: "#", id: 2 },
  { name: "Accessories", href: "#", id: 3 },
  { name: "Brands", href: "#", id: 4 },
  { name: "Sale", href: "#", id: 5 },
];

const Header: React.FC<HeaderProps> = ({ theme }) => {
  const { logo } = theme;
  return (
    <header>
      <nav
        className="flex items-center justify-between p-6 lg:p-8"
        aria-label="Global"
      >
        {/* logo */}
        <div className="flex lg:flex-1">
          <Link href="/">
            <Image width={80} height={80} src={logo} alt="logo" />
          </Link>
        </div>
        {/* links */}
        <div className="flex gap-x-12">
          {navigation.map((item: NavigationType) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm font-semibold leading-6"
            >
              {item.name}
            </a>
          ))}
        </div>
        {/* login */}
        <div className="flex lg:flex-1 lg:justify-end lg:gap-4">
          <Link href="/login" className="text-sm font-semibold leading-6">
            Log in <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
