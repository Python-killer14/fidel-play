import Image from "next/image";
import React from "react";

function GameOptionCard() {
  return (
    <div className="">
      <article className="w-72 relative flex flex-col items-center border rounded-3xl py-10 ">
        <h1 className="absolute bottom-20 left-0 text-2xl bg-lightBlue px-4 rounded-r-lg ">
          01
        </h1>
        <Image
          className=" rounded-full border drop-shadow-md p-2"
          src={"/images/3d-rabbit-head.png"}
          height={230}
          width={230}
        />
        <section className="mt-6 ">
          <h3 className="text-boldPurple text-2xl z-2 relative">
            Drag and Drop Letters
          </h3>
        </section>
      </article>
    </div>
  );
}

export default GameOptionCard;
