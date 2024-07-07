"use client";
import Row from "@/src/frontend/components/common/Row";
import React, { useState } from "react";
import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faMagnifyingGlass,
  faBookmark,
  faUser,
  faUnderline,
} from "@fortawesome/free-solid-svg-icons";
import { text } from "stream/consumers";

const ContainerEl = styled(Row)`
  height: 50px;
  width: 360px;
  position: fixed;
  bottom: 0px;
  justify-content: center;
  /*   background-color: aqua; */
`;

const MenuEl = styled(Row)`
  cursor: pointer;
  max-width: 330px;
  width: calc(100% - 30px);
  gap: 20px;
  justify-content: space-around;
  align-items: center;
  /*   background-color: black; */
`;

const HomeEl = styled(Row)`
  justify-content: center;
  align-items: center;
  /*   background-color: red; */
  padding: 0px 14px;
`;
const SearchEl = styled(Row)`
  justify-content: center;
  align-items: center;
  /*  background-color: brown; */
  padding: 0px 14px;
`;
const BookmarkEl = styled(Row)`
  justify-content: center;
  align-items: center;
  /*  background-color: tan; */
  padding: 0px 14px;
`;

const ProfileEl = styled(Row)`
  justify-content: center;
  align-items: center;
  /*  background-color: gold; */
  padding: 0px 14px;
`;

const GEl = styled(Row)`
  align-items: center;
  gap: 6px;
  justify-content: center;
  color: white;
  background-color: black;
  padding: 10px 15px;
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
