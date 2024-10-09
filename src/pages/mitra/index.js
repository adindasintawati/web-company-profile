import React from "react";
import IconBox from "@/components/molecules/IconBox";
import Navbar from "@/components/organism/Navbar";
import Paragraph from "@/components/atoms/Paragraph";
import Logo from "@/components/atoms/Logo";
import Footer from "@/components/organism/Footer";

const Mitra = () => {
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
              text="Dipercaya oleh berbagai bisnis"
            />
            <Paragraph
              className="!text-[17px] !text-[#606060]"
              text="Layanan kami menjadi solusi bagi berbagai bisnis dari industri yang beragam."
            />
          </div>
          <div className="py-16 items-center flex flex-col gap-20">
            <Paragraph
              className="!text-[42px] !text-[#000000] text-center"
              text={
                <>
                  Mitra Pemasar
                  <br />
                  (Kanal Distribusi)
                </>
              }
            />
            <div className="flex gap-80">
              <Logo
                img={
                  <img
                    height={200}
                    width={150}
                    src="https://brokerindotekno.co.id/wp-content/uploads/2023/06/Logo-Cekpremi-O-W200.png"
                  />
                }
              />
              <Logo
                img={
                  <img
                    height={200}
                    width={150}
                    src="https://brokerindotekno.co.id/wp-content/uploads/2023/06/fuse-logo200.png"
                  />
                }
              />
            </div>
            <div className="flex gap-80">
              <Logo
                img={
                  <img
                    height={200}
                    width={150}
                    src="https://brokerindotekno.co.id/wp-content/uploads/2023/05/Tokopedia.png"
                  />
                }
              />
              <Logo
                img={
                  <img
                    height={200}
                    width={80}
                    src="https://brokerindotekno.co.id/wp-content/uploads/2023/05/Mitra_Adiperkasa_logo.svg.png"
                  />
                }
              />
              <Logo
                img={
                  <img
                    height={200}
                    width={150}
                    src="https://brokerindotekno.co.id/wp-content/uploads/2023/05/sinarmasbank.png"
                  />
                }
              />
            </div>
            <div className="flex gap-80">
              <Logo
                img={
                  <img
                    height={200}
                    width={150}
                    src="https://brokerindotekno.co.id/wp-content/uploads/2023/05/amartha.png"
                  />
                }
              />
              <Logo
                img={
                  <img
                    height={200}
                    width={80}
                    src="https://brokerindotekno.co.id/wp-content/uploads/2024/05/yup-logo1.png"
                  />
                }
              />
              <Logo
                img={
                  <img
                    height={200}
                    width={150}
                    src="https://brokerindotekno.co.id/wp-content/uploads/2023/05/ada-kami.png"
                  />
                }
              />
            </div>
          </div>
          <div className="text-center py-10">
            <Paragraph
              className="!text-[42px] !text-[#000000]"
              text="Mitra Refinancing"
            />
          </div>
          <div className="flex gap-24 justify-center">
            <Logo
              img={
                <img
                  height={200}
                  width={180}
                  src="https://brokerindotekno.co.id/wp-content/uploads/2023/06/maybank-finance.png"
                />
              }
            />
            <Logo
              img={
                <img
                  height={200}
                  width={180}
                  src="https://brokerindotekno.co.id/wp-content/uploads/2023/06/smgw.png"
                />
              }
            />
            <Logo
              img={
                <img
                  height={200}
                  width={180}
                  src="https://brokerindotekno.co.id/wp-content/uploads/2023/06/orico.png"
                />
              }
            />
            <Logo
              img={
                <img
                  height={200}
                  width={200}
                  src="https://brokerindotekno.co.id/wp-content/uploads/2023/06/simas-hana.png"
                />
              }
            />
          </div>
          <div className="py-10">
            <Paragraph
              className="!text-[42px] !text-[black] text-center pt-20"
              text="Klien Asuransi Umum"
            />
          </div>
          <div className="flex flex-col gap-10">
            <div className="flex gap-24 justify-center items-center">
              <Logo
                img={
                  <img
                    height={200}
                    width={100}
                    src="https://brokerindotekno.co.id/wp-content/uploads/2023/05/Waskita_Karya.png"
                  />
                }
              />
              <Logo
                img={
                  <img
                    height={200}
                    width={140}
                    src="https://brokerindotekno.co.id/wp-content/uploads/2023/05/perkebunan-nusantara.png"
                  />
                }
              />
              <Logo
                img={
                  <img
                    height={200}
                    width={200}
                    src="https://brokerindotekno.co.id/wp-content/uploads/2023/05/pupukkaltim-2048x304.png"
                  />
                }
              />
              <Logo
                img={
                  <img
                    height={200}
                    width={100}
                    src="https://brokerindotekno.co.id/wp-content/uploads/2023/05/woodveneeradiperkasa.png"
                  />
                }
              />
            </div>
            <div className="flex gap-24 justify-center items-center">
              <Logo
                img={
                  <img
                    height={200}
                    width={120}
                    src="https://brokerindotekno.co.id/wp-content/uploads/2023/05/IPC-logo.png"
                  />
                }
              />
              <Logo
                img={
                  <img
                    height={200}
                    width={140}
                    src="https://brokerindotekno.co.id/wp-content/uploads/2023/05/nindya-karya.png"
                  />
                }
              />
              <Logo
                img={
                  <img
                    height={200}
                    width={150}
                    src="https://brokerindotekno.co.id/wp-content/uploads/2023/05/philips-seafood.png"
                  />
                }
              />
            </div>
          </div>
          <div className="py-10">
            <div className="flex flex-col gap-10">
              <Paragraph
                className="!text-[42px] text-[black] text-center pt-20"
                text="Klien Asuransi Kelompok"
              />
              <div className="flex gap-32 justify-center items-center">
                <Logo
                  img={
                    <img
                      height={200}
                      width={100}
                      src="https://brokerindotekno.co.id/wp-content/uploads/2023/05/sctv.png"
                    />
                  }
                />
                <Logo
                  img={
                    <img
                      height={200}
                      width={100}
                      src="https://brokerindotekno.co.id/wp-content/uploads/2023/05/Emtek_logo.svg.png"
                    />
                  }
                />
                <Logo
                  img={
                    <img
                      height={200}
                      width={100}
                      src="https://brokerindotekno.co.id/wp-content/uploads/2023/05/mcg-logo-color.png"
                    />
                  }
                />
                <Logo
                  img={
                    <img
                      height={200}
                      width={100}
                      src="https://brokerindotekno.co.id/wp-content/uploads/2023/05/survana.png"
                    />
                  }
                />
              </div>
              <div className="flex gap-32 justify-center items-center">
                <Logo
                  img={
                    <img
                      height={200}
                      width={80}
                      src="https://brokerindotekno.co.id/wp-content/uploads/2023/05/Indosiar.png"
                    />
                  }
                />
                <Logo
                  img={
                    <img
                      height={200}
                      width={100}
                      src="https://brokerindotekno.co.id/wp-content/uploads/2023/05/vidio.png"
                    />
                  }
                />
                <Logo
                  img={
                    <img
                      height={200}
                      width={100}
                      src="https://brokerindotekno.co.id/wp-content/uploads/2023/05/Lion_Air_Group_logo.svg.png"
                    />
                  }
                />
                <Logo
                  img={
                    <img
                      height={200}
                      width={100}
                      src="https://brokerindotekno.co.id/wp-content/uploads/2023/05/tbg-2048x852.png"
                    />
                  }
                />
              </div>
              <div className="flex gap-32 justify-center items-center">
                <Logo
                  img={
                    <img
                      height={200}
                      width={80}
                      src="https://brokerindotekno.co.id/wp-content/uploads/2023/05/cargill.png"
                    />
                  }
                />
                <Logo
                  img={
                    <img
                      height={200}
                      width={100}
                      src="https://brokerindotekno.co.id/wp-content/uploads/2023/05/rans.png"
                    />
                  }
                />
                <Logo
                  img={
                    <img
                      height={200}
                      width={100}
                      src="https://brokerindotekno.co.id/wp-content/uploads/2023/05/ajaib.png"
                    />
                  }
                />
                <Logo
                  img={
                    <img
                      height={200}
                      width={100}
                      src="https://brokerindotekno.co.id/wp-content/uploads/2023/05/bank_index.png"
                    />
                  }
                />
              </div>
              <div className="flex gap-40 justify-center items-center">
                <Logo
                  img={
                    <img
                      height={200}
                      width={200}
                      src="https://brokerindotekno.co.id/wp-content/uploads/2023/05/Kitabisa.com_.png"
                    />
                  }
                />
                <Logo
                  img={
                    <img
                      height={200}
                      width={120}
                      src="https://brokerindotekno.co.id/wp-content/uploads/2023/05/vidio.png"
                    />
                  }
                />
                <Logo
                  img={
                    <img
                      height={200}
                      width={120}
                      src="https://brokerindotekno.co.id/wp-content/uploads/2023/05/best_logistics.png"
                    />
                  }
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

export default Mitra;
