"use client";
import React from "react";
import { styled } from "styled-components";

interface Props {
  children: React.ReactNode;
}

const GlobalStyledProvider = ({ children }: Props) => {
  return <GlobalStyles>{children}</GlobalStyles>;
};

const GlobalStyles = styled.div`
  display: flex;
  gap: 2.5rem;
  padding: 2.5rem;
  height: 100%;
`;

export default GlobalStyledProvider;
