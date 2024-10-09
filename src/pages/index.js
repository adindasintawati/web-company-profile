import Product from "@/components/organism/Product";
import About from "@/components/organism/About";
import Colaboration from "@/components/organism/Colaboration";
import Footer from "@/components/organism/Footer";
import Header from "@/components/organism/Header";

export default function Home() {
  return (
    <div>
      <Header />
      <Product />
      <About />
      <Colaboration />
      <Footer />
    </div>
  );
}
