"use client";
import { useGlobalState } from "@/app/context/GlobalProvider";
import Image from "next/image";
import React from "react";
import styled from "styled-components";
import menu from "@/app/utils/menu";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Sidebar = () => {
  const { theme } = useGlobalState();

  const router = useRouter();

  const handleClick = (link: string) => {
    router.push(link);
  };

  return (
    <SidebarStyled theme={theme}>
      <div className="profile">
        <div className="profile-overlay"></div>
        <div className="image">
          <Image
            width={70}
            height={60}
            className="rounded-full object-cover"
            src="/AnkitProfile.jpg"
            alt="profile"
          />
        </div>
        <h1>Ankit Mishra</h1>
        <ul className="nav-items">
          {menu.map((item) => {
            return (
              <li className={`nav-link`} onClick={() => handleClick(item.link)}>
                {item.icon}
                <Link href={item.link}>{item.title}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    </SidebarStyled>
  );
};

const SidebarStyled = styled.nav`
  position: relative;
  width: ${(props) => props.theme.sidebarWidth};
  background-color: ${(props) => props.theme.colorBg2};
  border: 2px solid ${(props) => props.theme.borderColor2};
  border-radius: 1rem;
`;

export default Sidebar;
