import Footer from "../components/Layout/Footer";
import Header from "../components/Layout/Header";

export const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div>{children}</div>
      <Footer />
    </>
  );
};
