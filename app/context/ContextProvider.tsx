"use client";
import React from "react";
import { GlobalProvider } from "@/app/context/GlobalProvider";

interface Props {
  children: React.ReactNode;
}

const ContextProvider = ({ children }: Props) => {
  return <GlobalProvider>{children}</GlobalProvider>;
};

export default ContextProvider;
