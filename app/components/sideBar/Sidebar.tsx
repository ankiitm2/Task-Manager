"use client";
import { useGlobalState } from "@/app/context/GlobalProvider";
import Image from "next/image";
import React from "react";
import styled from "styled-components";
import menu from "@/app/utils/menu";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const Sidebar = () => {
  const { theme } = useGlobalState();
  console.log("theme === ", theme);

  const pathName = usePathname();

  const router = useRouter();

  const handleClick = (link: string) => {
    router.push(link);
  };
  return (
    <SidebarStyled theme={theme}>
      <div className="profile">
        <div className="profile-overlay absolute top-0 left-0 h-full w-full backdrop-blur z-0 rounded-2xl"></div>
        <div className="image flex items-center relative z-10 shrink-0 inline-block overflow-hidden">
          <Image
            width={70}
            height={60}
            className="rounded-full object-cover transition-all duration-500"
            src="/AnkitProfile.jpg"
            alt="profile"
          />
          <h1 className="flex flex-col text-xl leading-6 relative z-10 ml-3">
            <span>Ankit</span>
            <span> Mishra</span>
          </h1>
        </div>
      </div>
      <ul className="nav-items">
        {menu.map((item) => {
          const link = item.link;
          return (
            <li
              className={`nav-item cursor-pointer relative grid ${
                pathName === link ? "active" : ""
              } `}
              onClick={() => handleClick(link)}
            >
              {item.icon}
              <Link href={link}>{item.title}</Link>
            </li>
          );
        })}
      </ul>
      <button></button>
    </SidebarStyled>
  );
};

const SidebarStyled = styled.nav`
  position: relative;
  width: ${(props) => props.theme.sidebarWidth};
  background-color: ${(props) => props.theme.colorBg2};
  border: 2px solid ${(props) => props.theme.borderColor2};
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: ${(props) => props.theme.colorGrey3};

  .profile {
    position: relative;
    margin: 1.5rem;
    padding: 1rem 0.8rem;
    font-weight: 500;
    color: ${(props) => props.theme.colorGrey0};
    display: flex;
    align-items: center;

    .profile-overlay {
      transition: all 0.3s linear;
      border: 2px solid ${(props) => props.theme.borderColor2};
      opacity: 0.2;
      background: ${(props) => props.theme.colorBg3};
    }

    .image {
      transition: all 0.5s ease;
      > h1 {
        font-size: clamp(1.2rem, 4vw, 1.4rem);
      }
    }

    &:hover {
      .profile-overlay {
        opacity: 1;
        border: 2px solid ${(props) => props.theme.borderColor2};
      }
    }
  }

  .nav-item {
    padding: 0.7rem 1rem 0.7rem 2.1rem;
    margin: 0.3rem 0;
    grid-template-columns: 40px 1fr;

    &::after {
      position: absolute;
      content: "";
      top: 0;
      left: 0;
      width: 0;
      height: 100%;
      z-index: 1;
      transition: all 0.3s ease-in-out;
      background-color: ${(props) => props.theme.activeNavLinkHover};
    }

    &::before {
      position: absolute;
      content: "";
      top: 0;
      right: 0;
      width: 0;
      height: 100%;
      background-color: ${(props) => props.theme.colorGreenDark};
      border-bottom-left-radius: 5px;
      border-top-left-radius: 5px;
    }

    a {
      font-weight: 500;
    }

    i {
      display: flex;
      align-items: center;
      color: ${(props) => props.theme.colorIcons};
    }

    &:hover {
      &::after {
        width: 100%;
      }
    }
  }

  .active {
    background-color: ${(props) => props.theme.activeNavLink};

    i,
    a {
      color: ${(props) => props.theme.colorIcons2};
    }
  }

  .active::before {
    width: 0.3rem;
  }
`;

export default Sidebar;
