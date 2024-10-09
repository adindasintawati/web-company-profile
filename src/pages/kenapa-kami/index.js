import Button from "@/components/atoms/Button";
import Paragraph from "@/components/atoms/Paragraph";
import IconBox from "@/components/molecules/IconBox";
import Cart from "@/components/organism/Cart";
import CartVisiMisi from "@/components/organism/CartVisiMisi";
import Footer from "@/components/organism/Footer";
import Navbar from "@/components/organism/Navbar";
import React from "react";

const KenapaKami = () => {
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
        <div className="py-20 text-center">
          <Paragraph className="text-[42px] text-[black]" text="Kenapa Kami" />
          <Paragraph
            className="!text-[17px] !text-[#606060]"
            text='"Kami bekerja dengan cara mandiri, dan mementingkan akan kepuasan klien kami"'
          />
        </div>
        <div className="flex gap-10">
          <div className="flex flex-col gap-10">
            <Cart
              img={
                <img src="https://brokerindotekno.co.id/wp-content/uploads/2023/05/Kami-mewakilli-anda.png" />
              }
              title="Kami Mewakili Anda"
              desc="Kami tidak mewakili perusahaan Asuransi, melainkan mewakili Anda."
            />
            <Cart
              img={
                <img src="https://brokerindotekno.co.id/wp-content/uploads/2023/05/Klaim-Mudah.png" />
              }
              title="Klaim Mudah"
              desc="Tidak perlu repot, karena kami akan mengurus dan membantu negosiasi untuk klaim Anda."
            />
          </div>
          <div className="flex flex-col gap-10">
            <Cart
              img={
                <img src="https://brokerindotekno.co.id/wp-content/uploads/2023/05/Komendasi.png" />
              }
              title="Klaim Mudah"
              desc="Tidak perlu repot, karena kami akan mengurus dan membantu negosiasi untuk klaim Anda."
            />
            <Cart
              img={
                <img src="https://brokerindotekno.co.id/wp-content/uploads/2023/05/Diskon-Specsial.png" />
              }
              title="Klaim Mudah"
              desc="Tidak perlu repot, karena kami akan mengurus dan membantu negosiasi untuk klaim Anda."
            />
          </div>
        </div>
        <div className="py-20">
          <div className="bg-gray-200 pl-32 h-[60vh]">
            <div className="flex gap-10">
              <div className="flex flex-col pt-20">
                <Paragraph
                  className="text-[black] !text-[42px]"
                  text="Kontak Kami"
                />
                <CartVisiMisi
                  className="!text-[#606060]"
                  desc="Butuh informasi lebih lanjut. Segera hubungi kami, tim ahli kami siap membantu Anda."
                />
              </div>
              <CartVisiMisi
                img={
                  <img
                    width={500}
                    height={500}
                    src="https://insurance.liquid-themes.com/elementor/wp-content/uploads/2021/09/img-4@2x.jpeg"
                  />
                }
              />
            </div>
            <div className="-mt-32">
              <Button textButton="Hubungi Kami" />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default KenapaKami;
