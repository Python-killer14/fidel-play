import React from "react";
import LogoLetter from "./LogoLetter";

function LogoLetterList() {
  return (
    <div className=" inline-flex items-center ">
      <LogoLetter letter={"F"} styles={""} className={" text-boldPurple"} />
      <LogoLetter letter={"i"} styles={""} className={"text-boldGreen"} />
      <LogoLetter letter={"d"} styles={""} className={"text-boldBlue"} />
      <LogoLetter letter={"e"} styles={""} className={"text-lightRed"} />
      <LogoLetter letter={"l"} styles={""} className={""} />
      <LogoLetter letter={"P"} styles={""} className={"text-boldBlue"} />
      <LogoLetter letter={"l"} styles={""} className={"text-boldPurple"} />
      <LogoLetter letter={"a"} styles={""} className={"text-lightRed"} />
      <LogoLetter letter={"y"} styles={""} className={"text-boldGreen"} />
    </div>
  );
}

export default LogoLetterList;
