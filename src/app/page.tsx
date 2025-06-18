"use client";

import CardsComponent from "./pagelinks/components/cards";
import Footer from "./pagelinks/components/footer";
import HeaderComponent from "./pagelinks/components/header";
import NavBottom from "./pagelinks/components/nav-bottom";


function Page() {
  return (
    <>
      <div>
        <HeaderComponent />
        <CardsComponent />
        <NavBottom />
      </div>
      <Footer />
    </>
  );
}
export default Page;