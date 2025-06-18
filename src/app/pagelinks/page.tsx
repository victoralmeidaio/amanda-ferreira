"use client";

import CardsComponent from "./components/cards";
import HeaderComponent from "./components/header";
import NavBottom from "./components/nav-bottom";

function Page() {
    return (
        <div>
            <HeaderComponent />
            <CardsComponent />
            <NavBottom />
        </div>
    );
}
export default Page;