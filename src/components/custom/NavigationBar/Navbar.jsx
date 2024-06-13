import React from "react";
import LogoLetterList from "../custom/logo/LogoLetterList";
import Link from "next/link";

function NavigationBar() {
  return (
    <main className="py-3 px-4 bg-lightOrange">
      <nav>
        <Link href="/">
          <LogoLetterList />
        </Link>
      </nav>
    </main>
  );
}

export default NavigationBar;
