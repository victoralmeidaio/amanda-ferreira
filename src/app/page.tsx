"use client";

import CardsComponent from "./pagelinks/components/cards";
import Footer from "./pagelinks/components/footer";
import HeaderComponent from "./pagelinks/components/header";
import Loading from "./pagelinks/components/loading";
import NavBottom from "./pagelinks/components/nav-bottom";


function Page() {
  return (
    <>
      <Loading />
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