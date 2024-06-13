"use client";
import { NextUIProvider } from "@nextui-org/react";

export function NextUIProviderCustom({ children }) {
  return <NextUIProvider>{children}</NextUIProvider>;
}
