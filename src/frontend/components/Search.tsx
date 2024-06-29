"use client";
import Row from "@/src/frontend/components/common/Row";
import React from "react";
import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";

const ContainerEl = styled(Row)`
  width: 360px;
  justify-content: center;
  background-color: rebeccapurple;
`;
const ContentEl = styled(Row)`
  gap: 10px;
  width: calc(100% - 30px);
  background-color: red;
`;
const SearchEl = styled.input.attrs({
  type: "search",
  placeholder: "Search destination",
})`
  width: 100%;
`;
const ImageEl = styled(Row)``;
const ButtonEl = styled(Row)``;
export default function Search() {
  return (
    <ContainerEl>
      <ContentEl>
        <SearchEl></SearchEl>
        <ButtonEl>
          <ImageEl>
            <Image src="" width={20} height={20} alt=" filter button"></Image>
          </ImageEl>
        </ButtonEl>
      </ContentEl>
    </ContainerEl>
  );
}
