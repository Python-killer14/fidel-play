import NavigationBar from "@/components/NavigationBar/Navbar";
import GameOptionCardList from "@/components/custom/home/GameOptionCardList";
import { Button } from "@nextui-org/button";
import Image from "next/image";

export default function Home() {
  return (
    <main className="h-screen bg-secondaryBg ">
      <div>
        <NavigationBar />
        <GameOptionCardList />
      </div>
    </main>
  );
}
