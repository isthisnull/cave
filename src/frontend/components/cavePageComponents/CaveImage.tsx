"use client";
import Row from "@/src/frontend/components/common/Row";
import React, { useState } from "react";
import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const ContainerEl = styled(Row)`
  margin-top: 15px;
  width: 360px;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const ImageEl = styled(Row)`
  margin-top: 20px;
  width: calc(100% - 30px);
  position: relative;
  border-radius: 30px;
  overflow: hidden;
`;

const TagEl = styled(Row)`
  flex-direction: column;
  position: absolute;
  color: white;
  left: 0;
  bottom: 88px;
  font-weight: 600;
  gap: 5px;
`;

const IcelandTextEl = styled(Row)`
  backdrop-filter: blur(33px);
  background-color: transparent;
  border-radius: 10px;
  overflow: hidden;
  gap: 7px;
  padding: 10px 20px;
  font-size: 1.2rem;
  font-weight: 500;
`;
const PriceStartEl = styled(Row)`
  font-size: 1.3rem;
  font-weight: 600;
`;
const PriceEl = styled(Row)`
  font-weight: 600;
  border-radius: 10px;
  font-size: 1.3rem;
`;
const PriceConEl = styled(Row)`
  flex-direction: column;
  left: 15px;
  bottom: 25px;
  position: absolute;
  color: white;
  gap: 3px;
`;
const ReturnButEl = styled.button`
  position: absolute;
  left: 20px;
  top: 20px;
  border: none;
  background-color: transparent;
  backdrop-filter: blur(12px);
  border-radius: 4px;
  padding: 10px 15px;
  cursor: pointer;
`;
const LinkEl = styled(Row)``;
export default function CaveImage() {
  return (
    <ContainerEl>
      <ImageEl>
        <LinkEl>
          <Link href={"/"}>
            <ReturnButEl>
              <FontAwesomeIcon
                icon={faArrowLeft}
                style={{ color: "#ffffff" }}
              />
            </ReturnButEl>
          </Link>
        </LinkEl>
        <TagEl>
          <IcelandTextEl>
            <FontAwesomeIcon
              icon={faLocationDot}
              style={{ color: "#ffffff" }}
            />
            Iceland
          </IcelandTextEl>
        </TagEl>
        <PriceConEl>
          <PriceStartEl>Ice Caves</PriceStartEl>
          <PriceEl>$400</PriceEl>
        </PriceConEl>
        <Image
          src={"/assets/2.jpg"}
          width={360}
          height={400}
          style={{ objectFit: "cover" }}
          alt="cave"
        ></Image>
      </ImageEl>
    </ContainerEl>
  );
}
