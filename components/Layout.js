import Header from "./Header";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Layout({ children }) {
  return (
    <div className="">
      <Header />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
