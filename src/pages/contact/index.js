import Paragraph from "@/components/atoms/Paragraph";
import IconBox from "@/components/molecules/IconBox";
import Footer from "@/components/organism/Footer";
import Navbar from "@/components/organism/Navbar";
import React from "react";

const Contact = () => {
  return (
    <>
      <div className="px-20 pt-10 flex flex-col gap-5">
        <div className="flex gap-4">
          <IconBox
            className="h-[3vh]"
            imgUrl={<img src="/draftsOrange.svg" />}
            text={"info@brokerindotekno.co.id"}
          />
          <IconBox
            className="h-[3vh]"
            imgUrl={<img src="callOrange.svg" />}
            text={"021 5020 0879"}
          />
        </div>
        <div>
          <Navbar />
        </div>
        <div className="py-20 flex flex-col gap-10">
          <div>
            <Paragraph
              className="!text-[47px] !text-[black] text-center"
              text="Hubungi Kami"
            />
          </div>
          <div className="flex flex-col gap-10">
            <div>
              <Paragraph
                className="!text-[14px] !text-[black] uppercase"
                text="Detail Kontak"
              />
            </div>
            <div className="flex gap-20">
              <div className="flex gap-40">
                <div className="flex flex-col">
                  <Paragraph
                    className="!text-[25px] !text-[black]"
                    text="Hubungi Kami"
                  />
                  <Paragraph
                    className="!text-[16px] !text-[#22243A]"
                    text="Tim kami dengan senang hati menjawab pertanyaan Anda. Isi formulir ini dan kami akan segera menghubungi Anda."
                  />
                </div>
                <div className="flex flex-col gap-3 w-[100vh]">
                  <Paragraph
                    className="!text-[12px] !text-[#E66C6C] uppercase font-bold"
                    text={
                      <>
                        Layanan Pelanggan: <br />
                        (021) 5020 0879
                      </>
                    }
                  />
                  <Paragraph
                    className="!text-[12px] !text-[black] font-bold uppercase"
                    text="Waktu Operasional"
                  />
                  <Paragraph
                    className="!text-[14px] !text-[black]"
                    text={
                      <>
                        SENIN - JUMAT
                        <br />
                        09.00 - 18.00 WIB
                      </>
                    }
                  />
                  <Paragraph
                    className="!text-[14px] !text-[black]"
                    text={
                      <>
                        SABTU & MINGGU
                        <br />
                        09.00 - 15.00 WIB
                      </>
                    }
                  />
                </div>
              </div>
              <div className="flex flex-col gap-3 w-[300vh]">
                <Paragraph
                  className="!text-[12px] !text-[black] uppercase font-bold"
                  text="Kantor Pusat"
                />
                <Paragraph
                  className="!text-[14px] !text-[black]"
                  text="The City Center (TCC) Menara Batavia Tower One, Lantai 7 Jl. K.H. Mas Mansyur Kav. 126, Karet Tengsin, Kecamatan Tanah Abang Jakarta Pusat 10220"
                />
                <Paragraph
                  className="!text-[12px] !text-[#E66C6C] uppercase font-bold"
                  text="info@brokerindotekno.co.id"
                />
                <Paragraph
                  className="!text-[12px] !text-[#E66C6C] uppercase font-bold"
                  text="Kantor 021 2940 7753"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
