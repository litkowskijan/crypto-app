import { ReactNode } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

interface LayoutProps {
  children: ReactNode;
}
function Layout({ children }: LayoutProps) {
  return (
    <>
      <NavBar />
      <main
        style={{
          display: "flex",
          width: "100%",
          height: "100vh",
          flexWrap: "wrap",
          flexDirection: "row",
          gap: "20px",
          padding: "5px",
        }}
      >
        {children}
      </main>
      <Footer />
    </>
  );
}

export default Layout;
