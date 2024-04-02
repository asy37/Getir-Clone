import Footer from "../components/Layout/Footer";
import Header from "../components/Layout/Header";
import { Basket } from "../components/Layout/Basket";
import { Sidebar } from "../components/Layout/Sidebar";

export const CategoriesLayout = ({ children }) => {
  return (
    <>
      <Header />
      <div className="flex h-screen w-full flex-col items-center justify-center bg-bgcolor ">
        <div className="relative flex h-screen w-[1270px] flex-row items-start justify-center gap-2 p-4">
          <Sidebar />
          <div
            className="h-[900px] w-[663px] overflow-auto"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}>
            {children}
          </div>
          <Basket />
        </div>
      </div>
      <Footer />
    </>
  );
};
