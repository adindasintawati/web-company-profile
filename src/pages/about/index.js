import React from "react";
import Paragraph from "@/components/atoms/Paragraph";
import Navbar from "@/components/organism/Navbar";
import Footer from "@/components/organism/Footer";
import IconBox from "@/components/molecules/IconBox";
import ListAboutUs from "@/components/molecules/ListAboutUs";
import CartVisiMisi from "@/components/organism/CartVisiMisi";

const aboutUs = [
  {
    desc: "Kami adalah Perusahaan Pialang Asuransi atau Broker Asuransi yang melayani korporasi maupun ritel. Kami akan memberikan pelayanan terbaik tanpa memberikan prioritas ataupun perbedaan untuk risiko besar ataupun kecil.",
  },
  {
    desc: "Kami mencurahkan segala perhatian serta komitmen kami pada semua Tertanggung dengan sama karena itulah dasar pelayanan yang kami tawarkan. Menjadi Perusahaan yang berorientasi pada pelayanan, mendengarkan dengan cermat dan memahami kebutuhan Klien menjadi titik perbedaan kami untuk meningkatkan kepuasan pelanggan.",
  },
  {
    desc: "Kami telah mendapatkan kepercayaan dari klien yang telah menjadi ujung tombak pertumbuhan Perusahaan Kami di masa depan.",
  },
];

const About = () => {
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
          <Navbar className="items-center shadow-lg" />
        </div>
        <div className="flex flex-col gap-20 pt-10">
          <Paragraph
            className="text-[black] !text-[42px] text-center"
            text="Tentang Kami"
          />
          <div className="flex justify-around pb-20">
            <img
              width={400}
              height={400}
              src="https://brokerindotekno.co.id/wp-content/uploads/2023/05/about_us-1.jpg"
            />
            <div className="flex flex-col gap-5 w-[39%] pt-10">
              <Paragraph
                className="text-[black] !text-[12px] uppercase font-bold"
                text="Tentang Kami"
              />
              {aboutUs.map((item, index) => (
                <ListAboutUs key={index} desc={item.desc} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-100 py-20 px-28">
        <div className="flex gap-20 bg-[#DD7C3B]">
          <CartVisiMisi
            img={
              <img
                width={500}
                height={500}
                src="https://brokerindotekno.co.id/wp-content/uploads/2023/05/vision.jpg"
              />
            }
          />
          <div className="flex flex-col gap-10 justify-center w-[40%]">
            <Paragraph className="text-[white] !text-[42px]" text="Visi" />
            <CartVisiMisi desc="Menjadi one stop for all yang dapat memenuhi kebutuhan Masyarakat Indonesia untuk segala keperluan asuransi dari pembelian sampai klaim asuransi dengan pelayanan No.1." />
          </div>
        </div>
      </div>
      <div className=" py-20 px-28">
        <div className="flex gap-20 bg-[#C64D42]">
          <div className="flex flex-col gap-10 justify-center w-[50%] pl-20">
            <Paragraph className="text-[white] !text-[42px]" text="Misi" />
            <CartVisiMisi desc="Menyediakan perlindungan menyeluruh bagi setiap lapisan masyarakat Indonesia melalui asuransi dengan memberikan akses pelayanan pra dan purna jual yang disajikan dalam format digital." />
          </div>
          <CartVisiMisi
            img={
              <img
                width={500}
                height={500}
                src="https://brokerindotekno.co.id/wp-content/uploads/2023/05/vision.jpg"
              />
            }
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
