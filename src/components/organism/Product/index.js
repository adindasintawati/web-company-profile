import Button from "@/components/atoms/Button";
import Paragraph from "@/components/atoms/Paragraph";
import React from "react";
import Cart from "../Cart";

const Product = () => {
  return (
    <div className="px-20 py-32 flex flex-col gap-20">
      <div className="flex gap-24">
        <Paragraph
          className="text-[black] text-[42px] pt-7"
          text="Produk Asuransi"
        />
        <Paragraph
          className="!text-[#505050] !text-[18px] w-[40%]"
          text="Kami tidak hanya menyederhanakan proses berasuransi yang rumit, tapi juga menyediakan pilihan produk asuransi terlengkap yang bisa Anda pilih untuk melindungi diri, orang yang Anda cintai, atau aset Anda yang paling berharga."
        />
        <img src="/arrowBack.svg" />
        <img src="/arrowForward.svg" />
      </div>
      <div className="flex gap-10 h-[90vh]">
        <Cart
          className="w-[30%]"
          img={
            <img
              width={58}
              height={58}
              src="https://brokerindotekno.co.id/wp-content/uploads/2021/09/umum.png"
            />
          }
          title="Asuransi Umum"
          desc="Melindungi dari resiko sehari-hari, termasuk kerusakan atau kehilangan kendaraan, rumah, dan properti, serta tanggung jawab hukum."
        />
        <Cart
          className="w-[30%]"
          img={
            <img
              width={58}
              height={58}
              src="https://brokerindotekno.co.id/wp-content/uploads/2021/09/kesehatan-jiwa.png"
            />
          }
          title="Asuransi Kesehatan & Jiwa"
          desc="Asuransi kesehatan mengurangi biaya medis dan perawatan kesehatan. Asuransi jiwa memberikan manfaat keuangan kepada keluarga jika Anda meninggal."
        />
        <Cart
          className="w-[30%]"
          img={
            <img
              width={58}
              height={58}
              src="https://brokerindotekno.co.id/wp-content/uploads/2021/09/mikro.png"
            />
          }
          title="Asuransi Mikro"
          desc="Menawarkan cakupan terjangkau untuk risiko aset bergerak, tanggung gugat, dan kredit."
        />
        <Cart
          className="w-[30%]"
          img={
            <img
              width={58}
              height={58}
              src="https://brokerindotekno.co.id/wp-content/uploads/2023/05/lain.png"
            />
          }
          title="Asuransi Lain-lain"
          desc="Mencakup berbagai cakupan khususnya seperti asuransi hewan peliharaan, dan asuransi untuk barang berharga."
        />
      </div>
      <div className="flex justify-center">
        <Button
          textButton="Lebih lanjut"
          className="pr-[50px]
        "
        />
        <img className="-ml-[8vh]" src="/arrowRight.svg" alt="" />
      </div>
    </div>
  );
};

export default Product;
