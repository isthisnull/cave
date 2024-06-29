import React from "react";
import Profile from "@/src/frontend/components/Profile";
import Search from "@/src/frontend/components/Search";
import TabCarousel from "@/src/frontend/components/TabCarousel";
function page() {
  return (
    <>
      <Profile />
      <Search />
      <TabCarousel />
    </>
  );
}

export default page;
