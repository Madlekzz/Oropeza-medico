import Header from "../components/Header";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";

const Layout = () => {
  return (
    <>
      <Header />
      <main className="bg-[url(/src/assets/background.png)]">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
