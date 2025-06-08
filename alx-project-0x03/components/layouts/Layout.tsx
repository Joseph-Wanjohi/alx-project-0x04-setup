import React, { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";

export interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => (
  <>
    <Header />
    <main className="pt-24">{children}</main>
    <Footer />
  </>
);

export default Layout;