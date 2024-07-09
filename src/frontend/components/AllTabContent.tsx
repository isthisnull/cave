"use client";
import Row from "@/src/frontend/components/common/Row";
import React, { useState } from "react";
import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

const ContainerEl = styled(Row)`
  margin-top: 15px;
  width: 360px;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  @media (max-width: 391px) {
    width: 390px;
  }
`;
const RecEl = styled(Row)`
  width: calc(100% - 30px);
  justify-content: space-between;
`;
const RecTextEl = styled(Row)`
  font-weight: 700;
`;
const SeeAllButEl = styled.button`
  background-color: transparent;
  border: none;
  font-weight: 700;
  color: rgba(155, 155, 155, 0.7);
`;
const ImageEl = styled(Row)`
  margin-top: 20px;
  width: calc(100% - 30px);
  position: relative;
  border-radius: 30px;
  overflow: hidden;
`;
const LinkEl = styled(Row)``;
const BookmarkButEl = styled.button`
  position: absolute;
  right: 12px;
  top: 12px;
  backdrop-filter: blur(55px);
  background-color: rgba(224, 224, 224, 0.2);
  padding: 13px 13px;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  &:hover {
    filter: drop-shadow(0 0mm 1mm rgb(30, 240, 255));
  }
`;
const TagEl = styled(Row)`
  flex-direction: column;
  position: absolute;
  color: white;
  left: 15px;
  bottom: 65px;
  font-weight: 600;
  gap: 5px;
`;
const IceCavesTextEl = styled(Row)`
  font-size: 1.2rem;
`;
const IcelandTextEl = styled(Row)`
  gap: 7px;
  align-items: center;
  font-size: 0.8rem;
  font-weight: 500;
`;
const PriceStartEl = styled(Row)``;
const PriceEl = styled(Row)`
  justify-content: center;
  align-items: center;
  padding: 6px 15px;
  backdrop-filter: blur(4px);
  background-color: rgba(224, 224, 224, 0.2);
  border-radius: 10px;
`;
const PriceConEl = styled(Row)`
  align-items: center;
  left: 15px;
  bottom: 25px;
  position: absolute;
  color: white;
  gap: 10px;
`;

function AllTabContent() {
  const [isbookmark, setIsbookmark] = useState(false);

  return (
    <ContainerEl>
      <RecEl>
        <RecTextEl>Recommended</RecTextEl>
        <SeeAllButEl>See All</SeeAllButEl>
      </RecEl>
      <ImageEl>
        <BookmarkButEl
          onClick={() => {
            setIsbookmark(!isbookmark);
          }}
        >
          <Image
            src={isbookmark ? "/assets/Bookmark.svg" : "/assets/NBookmark.svg"}
            width={20}
            height={20}
            alt="cave"
          ></Image>
        </BookmarkButEl>
        <TagEl>
          <IceCavesTextEl>Ice Caves</IceCavesTextEl>
          <IcelandTextEl>
            <FontAwesomeIcon
              icon={faLocationDot}
              style={{ color: "#ffffff" }}
            />
            Iceland
          </IcelandTextEl>
        </TagEl>
        <PriceConEl>
          <PriceStartEl>Starting at</PriceStartEl>
          <PriceEl>$200</PriceEl>
        </PriceConEl>
        <LinkEl>
          <Link href={"./cave"}>
            <Image
              src={"/assets/2.jpg"}
              width={360}
              height={450}
              style={{ objectFit: "cover" }}
              alt="cave"
            ></Image>
          </Link>
        </LinkEl>
      </ImageEl>
    </ContainerEl>
  );
}

export default AllTabContent;
