"use client";

import CardsComponent from "./pagelinks/components/cards";
import Footer from "./pagelinks/components/footer";
import HeaderComponent from "./pagelinks/components/header";
import NavBottom from "./pagelinks/components/nav-bottom";


function Page() {
  return (
    <>
      <div className="sm:max-w-[450px]">
        <HeaderComponent />
        <CardsComponent />
        <NavBottom />
      <Footer />
      </div>
    </>
  );
}
export default Page;