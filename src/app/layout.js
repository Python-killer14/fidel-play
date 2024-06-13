import { Inter, Acme, Chewy } from "next/font/google";
import "./globals.css";
import { NextUIProviderCustom } from "./providers/nextUIProvider";

const inter = Inter({ subsets: ["latin"] });
const acme = Acme({ subsets: ["latin"], weight: "400" });
const chewy = Chewy({ subsets: ["latin"], weight: "400" });

export const metadata = {
  title: "Fidel Play",
  description:
    "A free-to-play entertainment and gaming platform for Ethiopic languages.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={chewy.className}>
        <NextUIProviderCustom>{children}</NextUIProviderCustom>
      </body>
    </html>
  );
}
