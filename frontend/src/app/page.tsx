"use client";

import { SideNav } from "./components";
import Products from "./products/page";
import Users from "./users/page";
import { useState } from "react";

export default function Home() {
  const [currentPage, setCurrentPage] = useState("users");

  return (
    <div className="h-screen flex flex-col">
      <div className="flex">
        <SideNav currentPage={currentPage} setCurrentPage={setCurrentPage} />
        {currentPage === "users" ? <Users /> : <Products />}
      </div>
    </div>
  );
}
