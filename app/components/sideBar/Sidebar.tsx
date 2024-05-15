"use client";
import { useGlobalState } from "@/app/context/GlobalProvider";
import React from "react";
import styled from "styled-components";

const Sidebar = () => {
  const { theme } = useGlobalState();

  return <SidebarStyled theme={theme}>Sidebar</SidebarStyled>;
};

const SidebarStyled = styled.nav`
  position: relative;
  width: ${(props) => props.theme.sidebarWidth};
  background-color: ${(props) => props.theme.colorBg2};
`;

export default Sidebar;
