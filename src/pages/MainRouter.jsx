import React from 'react';
import { Outlet } from "react-router-dom";
import { Header, Footer } from "../components";

const MainRouter = () => {
  return (
    <>
      <Header />
      <main className="flex-auto">
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default MainRouter;