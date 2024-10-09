import Paragraph from "@/components/atoms/Paragraph";
import ListFooter from "@/components/molecules/ListFooter";
import React from "react";

const footer = [
  {
    desc: "Tentang Kami",
  },
  {
    desc: "Kenapa Kami",
  },
  {
    desc: "Produk & Layanan",
  },
  {
    desc: "Klaim",
  },
  {
    desc: "Mitra",
  },
  {
    desc: "Kebijakan Pribadi",
  },
  {
    desc: "Pemberitahuan Privasi",
  },
  {
    desc: "Syarat dan Ketentuan",
  },
];

const Footer = () => {
  return (
    <>
      <div className="bg-gray-200 p-20 flex gap-52">
        <div className="w-[50%]">
          <img src="https://brokerindotekno.co.id/wp-content/uploads/2023/05/PAI_Logo_Prime-1.png" />
          <Paragraph
            className="!text-[#232A3B] !text-[16px] pt-10 border-y-current"
            text="PT Pialang Asuransi Indotekno Izin Usaha OJK: KEP-6/NB.1/2019 tanggal 14 Februari 2019 Diawasi oleh Otoritas Jasa Keuangan (OJK)"
          />
        </div>
        <div className="flex flex-col gap-5 w-[50%]">
          <Paragraph
            className="text-[black] !text-[16px] font-bold"
            text="Indotekno"
          />
          {footer.map((item, index) => (
            <ListFooter key={index} text={item.desc} />
          ))}
        </div>
        <div className="flex flex-col gap-5">
          <Paragraph
            className="text-[black] font-bold !text-[16px]"
            text="Hubungi Kami"
          />
          <div>
            <Paragraph
              className="!text-[16px] text-[black] font-bold"
              text="TCC Batavia Tower One"
            />
            <Paragraph
              className="!text-[16px] !text-[#232A3B]"
              text="Lantai 7, Jalan K.H. Mas Mansyur Kav 126, Karet Tengsin, Tanah Abang, Jakarta Pusat, DKI Jakarta info@brokerindotekno.co.id"
            />
          </div>
          <div className="flex gap-2">
            <Paragraph className="!text-[16px] text-[#ff6600]" text="Kantor" />
            <Paragraph
              className="!text-[16px] !text-[#232A3B]"
              text="021 2940 7753"
            />
          </div>
          <div className="flex gap-2">
            <Paragraph
              className="!text-[16px] !text-[#ff6600]"
              text="Layanan Pelanggan "
            />
            <Paragraph
              className="!text-[16px] !text-[#232A3B]"
              text="021 5020 0879"
            />
          </div>
        </div>
      </div>
      <div className="bg-gray-200 text-center pb-10">
        <Paragraph
          className="!text-[#103A40A6] !text-[14px]"
          text="© PT Pialang Asuransi Indotekno . All rights reserved."
        />
      </div>
    </>
  );
};

export default Footer;
