import Footer from "./Footer";
import Header from "./Header";
import Image from "next/image";
import bg from "../public/images/bg-gradient.png";
import Script from "next/script";
import Head from "next/head";

interface LayoutProps {
  children: React.ReactNode;
}
const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="flex flex-col">
      <Image
        src={bg}
        alt="background"
        className="absolute -z-1 bg-black"
        fill
      />
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
