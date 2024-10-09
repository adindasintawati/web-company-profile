import React from "react";
import IconBox from "@/components/molecules/IconBox";
import Navbar from "@/components/organism/Navbar";
import Paragraph from "@/components/atoms/Paragraph";
import Cart from "@/components/organism/Cart";
import Footer from "@/components/organism/Footer";

const Klaim = () => {
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
        <div className="py-20">
          <div className="text-center">
            <Paragraph
              className="!text-[42px] !text-[#000000]"
              text="Senantiasa Menjaga Kepercayaan Anda"
            />
            <Paragraph
              className="!text-[17px] !text-[#606060]"
              text="Sebagai broker asuransi profesional, kami berkomitmen untuk senantiasa menjaga kepercayaan Anda, terutama dalam membantu proses klaim nasabah asuransi."
            />
          </div>
          <div className="flex gap-10 pt-20">
            <Cart
              className="w-[30%]"
              img={
                <img
                  height={75}
                  width={75}
                  src="https://brokerindotekno.co.id/wp-content/uploads/2023/06/efisien.png"
                />
              }
              title={"Cepat dan Efisien"}
              desc={
                "Kami berkomitmen menyederhanakan proses klaim, sehingga Anda lebih cepat menerima manfaat dari produk yang dipilih."
              }
            />
            <Cart
              className="w-[30%]"
              img={
                <img
                  height={75}
                  width={75}
                  src="https://brokerindotekno.co.id/wp-content/uploads/2023/06/trusted.png"
                />
              }
              title={"Kredibel"}
              desc={
                "Pengalaman dan reputasi yang kuat, telah terbentuk dari hubungan baik dengan perusahaan asuransi terkemuka, proses klaim asuransi Anda dapat ditangani dengan profesional dan integritas yang tinggi."
              }
            />
            <Cart
              className="w-[30%]"
              img={
                <img
                  height={75}
                  width={75}
                  src="https://brokerindotekno.co.id/wp-content/uploads/2023/06/handal.png"
                />
              }
              title={"Handal"}
              desc={
                "Sebagai pihak yang mewakili kepentingan nasabah asuransi, sudah menjadi bagian dari layanan kami untuk senantiasa menangani eskalasi proses klaim Anda kepada pihak asuransi."
              }
            />
          </div>
          <div className="text-center pt-20">
            <Paragraph
              className="!text-[42px] !text-[#000000]"
              text="Claim Form"
            />
            <Paragraph
              className="!text-[17px] !text-[#606060]"
              text="Pengajuan klaim dapat Anda lakukan dengan melengkapi formulir berikut:"
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Klaim;
