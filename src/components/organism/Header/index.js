import React from "react";
import Paragraph from "@/components/atoms/Paragraph";
import Navbar from "../Navbar";
import Button from "@/components/atoms/Button";
import IconBox from "@/components/molecules/IconBox";

const Header = () => {
  return (
    <div className="header-container px-20 pt-10 flex flex-col gap-5">
      <div className="flex gap-4">
        <IconBox
          className="h-[3vh] text-[white]"
          imgUrl={<img src="/email.svg" />}
          text={"info@brokerindotekno.co.id"}
        />
        <IconBox
          className="h-[3vh] text-[white]"
          imgUrl={<img src="telp.svg" />}
          text={"021 5020 0879"}
        />
      </div>
      <Navbar />
      <div>
        <Paragraph
          className="text-[47px] w-[30%]"
          text="Demokratisasi Asuransi Secara Digital"
        />
        <Paragraph
          className="text-[20px] w-[40%]"
          text="Menyediakan perlindungan menyeluruh bagi setiap lapisan masyarakat Indonesia melalui asuransi dengan memberikan akses pelayanan pra dan purna jual yang disajikan dalam format digital."
        />
      </div>
      <div className="pt-5">
        <Button
          textButton="Hubungi Kami"
          color="bg-white"
          className="!text-[#ea7c3b] hover:!text-white"
        />
      </div>
    </div>
  );
};

export default Header;
