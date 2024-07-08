"use client";
import Row from "@/src/frontend/components/common/Row";
import React from "react";
import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

const ContainerEl = styled(Row)`
  width: 360px;
  justify-content: center;
  margin-bottom: 20px;
`;
const ContentEl = styled(Row)`
  gap: 10px;
  width: calc(100% - 30px);
`;

const SearchEl = styled.input.attrs({
  type: "search",
  placeholder: "Search destination",
})`
  background-image: url("/assets/search.svg");
  background-position: 8px 12px;
  background-size: 15px 15px;
  background-repeat: no-repeat;
  padding: 4px 28px;
  border: none;
  background-color: rgba(247, 247, 247, 0.7);
  border-radius: 10px;
  width: 100%;
  font-size: 0.7rem;
  font-weight: 700;
  &::placeholder {
    color: #cecece;
    border: none;
  }
  &::after {
    border: 1px solid red;
  }
`;
const ImageEl = styled(Row)``;
const ButtonEl = styled(Row)`
  padding: 10px 10px;
  border: none;
  border-radius: 10px;
  background: linear-gradient(
    142deg,
    rgba(16, 69, 91, 1) 0%,
    rgba(69, 146, 164, 1) 92%,
    rgba(100, 163, 177, 1) 100%
  );
`;
export default function Search() {
  return (
    <ContainerEl>
      <ContentEl>
        <SearchEl></SearchEl>
        <ButtonEl>
          <ImageEl>
            <Image
              src="/assets/filter.svg"
              width={20}
              height={20}
              alt=" filter button"
            ></Image>
          </ImageEl>
        </ButtonEl>
      </ContentEl>
    </ContainerEl>
  );
}
