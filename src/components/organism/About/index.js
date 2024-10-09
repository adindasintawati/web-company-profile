import Paragraph from "@/components/atoms/Paragraph";
import React from "react";

const About = () => {
  return (
    <div className="bg-gray-100 py-20 flex justify-around">
      <div className="flex flex-col gap-5 max-w-[40%]">
        <Paragraph className="text-[black] text-[42px]" text="Tentang Kami" />
        <Paragraph
          className="text-[gray] text-[17px]"
          text="Kami adalah Perusahaan Pialang Asuransi atau Broker Asuransi yang melayani korporasi maupun ritel. Kami akan memberikan pelayanan terbaik tanpa memberikan prioritas ataupun perbedaan untuk risiko besar ataupun kecil."
        />
        <Paragraph
          className="text-[gray] text-[17px]"
          text="Kami mencurahkan segala perhatian serta komitmen kami pada semua Tertanggung dengan sama karena itulah dasar pelayanan yang kami tawarkan."
        />
      </div>
      <div>
        <img
          className="rounded-md"
          width={500}
          height={500}
          src="https://brokerindotekno.co.id/wp-content/uploads/2023/06/shutterstock_2080021099.jpg"
        />
      </div>
    </div>
  );
};

export default About;
