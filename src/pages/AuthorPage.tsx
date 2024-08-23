/* src/pages/AuthorPage.tsx */
import React from "react";
import Header from "../components/Header";
import Tabs from "../components/Tabs";
import AuthorGrid from "../components/AuthorGrid";
import Footer from "../components/Footer";

const AuthorPage: React.FC = () => {
  return (
    <>
      <Header />
      <Tabs />
      <AuthorGrid />
      <Footer />
    </>
  );
};

export default AuthorPage;
