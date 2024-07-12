"use client";
import Row from "@/src/frontend/components/common/Row";
import React, { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faMagnifyingGlass,
  faBookmark,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

const ContainerEl = styled(Row)`
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
  height: 50px;
  width: 360px;
  position: fixed;
  bottom: 0px;
  justify-content: center;
  background-color: #ffffff;
  @media (min-width: 319px) {
    width: 320px;
  }
  @media (min-width: 374px) {
    width: 375px;
  }
  @media (min-width: 411px) {
    width: 412px;
  }
  @media (min-width: 424px) {
    width: 425px;
  }
  @media (min-width: 767px) {
    width: 768px;
  }
`;

const MenuEl = styled(Row)`
  cursor: pointer;
  max-width: 330px;
  width: calc(100% - 30px);
  gap: 20px;
  justify-content: space-around;
  align-items: center;
  @media (min-width: 319px) {
    width: 320px;
    max-width: 310px;
    gap: 5px;
  }
  @media (min-width: 374px) {
    width: 375px;
    max-width: 360px;
    gap: 15px;
  }
  @media (min-width: 411px) {
    width: 412px;
    max-width: 400px;
    gap: 17px;
  }
  @media (min-width: 424px) {
    width: 425px;
    max-width: 420px;
    gap: 20px;
  }
  @media (min-width: 767px) {
    width: 768px;
    max-width: 750px;
    gap: 20px;
  }
`;

const HomeEl = styled(Row)`
  justify-content: center;
  align-items: center;
  padding: 0px 14px;
`;
const SearchEl = styled(Row)`
  justify-content: center;
  align-items: center;
  padding: 0px 14px;
`;
const BookmarkEl = styled(Row)`
  justify-content: center;
  align-items: center;
  padding: 0px 14px;
`;

const ProfileEl = styled(Row)`
  justify-content: center;
  align-items: center;
  padding: 0px 14px;
`;

const GEl = styled(Row)`
  align-items: center;
  gap: 6px;
  justify-content: center;
  color: white;
  background-color: black;
  padding: calc(10px + 1vw) calc(15px + 2vw);
  border-radius: 10px;
`;
export default function Menu() {
  const [tab, setTab] = useState("home");
  return (
    <ContainerEl>
      <MenuEl>
        <HomeEl
          onClick={() => {
            setTab("home");
          }}
        >
          {tab === "home" ? (
            <GEl>
              <FontAwesomeIcon icon={faHouse} style={{ color: "#ffffff" }} />
              Home
            </GEl>
          ) : (
            <FontAwesomeIcon icon={faHouse} style={{ color: "#a3a3a3" }} />
          )}
        </HomeEl>
        <SearchEl
          onClick={() => {
            setTab("search");
          }}
        >
          {tab === "search" ? (
            <GEl>
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                style={{ color: "#ffffff" }}
              />
              Search
            </GEl>
          ) : (
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              style={{ color: "#a3a3a3" }}
            />
          )}
        </SearchEl>
        <BookmarkEl
          onClick={() => {
            setTab("bookmark");
          }}
        >
          {tab === "bookmark" ? (
            <GEl>
              <FontAwesomeIcon icon={faBookmark} style={{ color: "#ffffff" }} />
              Bookmark
            </GEl>
          ) : (
            <FontAwesomeIcon icon={faBookmark} style={{ color: "#a3a3a3" }} />
          )}
        </BookmarkEl>
        <ProfileEl
          onClick={() => {
            setTab("profile");
          }}
        >
          {tab === "profile" ? (
            <GEl>
              <FontAwesomeIcon icon={faUser} style={{ color: "#ffffff" }} />
              Profile
            </GEl>
          ) : (
            <FontAwesomeIcon icon={faUser} style={{ color: "#a3a3a3" }} />
          )}
        </ProfileEl>
      </MenuEl>
    </ContainerEl>
  );
}
