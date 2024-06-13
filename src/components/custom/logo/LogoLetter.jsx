import { cn } from "@/lib/utils";
import React from "react";

function LogoLetter({ letter, styles, className }) {
  return (
    <span className={cn("text-2xl", className)} styles={styles}>
      {letter}
    </span>
  );
}

export default LogoLetter;
