import React from "react";
import Header from "../components/Header";
import Tabs from "../components/Tabs";
import AuthorGrid from "../components/AuthorGrid";
import "./AuthorsPage.css";

const AuthorsPage: React.FC = () => {
  return (
    <>
      <Header />
      <Tabs />
      <AuthorGrid />
    </>
  );
};

export default AuthorsPage;
