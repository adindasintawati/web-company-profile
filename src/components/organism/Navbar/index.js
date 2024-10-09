import Button from "@/components/atoms/Button";
import ListNavbar from "@/components/molecules/ListNavbar";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="bg-white px-5 py-[20px] rounded-lg sticky top-2 shadow-lg">
      <nav className="flex gap-20 items-center">
        <Link href={"/"}>
          <img src="https://brokerindotekno.co.id/wp-content/uploads/2021/09/site-logo.png" />
        </Link>
        <div className="text-[15px] text-black flex gap-9 hover:text-[gray]">
          <Link href={"/about"}>
            <ListNavbar className="hover:text-[black]" text="Tentang Kami" />
          </Link>
          <Link href={"/kenapa-kami"}>
            <ListNavbar className="hover:text-[black]" text="Kenapa Kami" />
          </Link>
          <Link href={"/"}>
            <ListNavbar
              className="hover:text-[black]"
              text="Produk & Layanan"
            />
          </Link>
          <Link href={"/klaim"}>
            <ListNavbar className="hover:text-[black]" text="Klaim" />
          </Link>
          <Link href={"/mitra"}>
            <ListNavbar className="hover:text-[black]" text="Mitra" />
          </Link>
          <Link href={"/contact"}>
            <ListNavbar className="hover:text-[black]" text="Hubungi Kami" />
          </Link>
        </div>
        <Link href={"/"}>
          <Button />
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;
