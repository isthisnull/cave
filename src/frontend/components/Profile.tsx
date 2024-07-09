"use client";
import Row from "@/src/frontend/components/common/Row";
import React, { useState } from "react";
import styled from "styled-components";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";
const ContainerEl = styled(Row)`
  width: 360px;
  justify-content: center;
  @media (max-width: 391px) {
    width: 390px;
  }
`;
const ProfileEl = styled(Row)`
  margin-top: 2px;
  margin-bottom: 30px;
  width: calc(100% - 30px);
  justify-content: space-between;
  align-items: center;
`;
const AvatarEl = styled(Row)``;
const InfoEl = styled(Row)`
  flex-direction: column;
  padding-right: 170px;
  gap: 2px;
`;
const HelloEl = styled(Row)`
  color: rgba(0, 0, 0, 0.6);
  font-weight: 600;
  font-size: 0.64rem;
`;
const NameEl = styled(Row)`
  font-weight: bold;
`;
const BellEl = styled(Row)`
  position: relative;
  justify-content: center;
  align-items: center;
`;
const NewNoticBellEl = styled(Row)`
  position: absolute;
  right: -6px;
  top: -4px;
  z-index: 444;
`;
const ImageEl = styled(Row)``;
export default function Profile() {
  const [ishover, setIshover] = useState(false);

  return (
    <ContainerEl>
      <ProfileEl>
        <AvatarEl>
          <ImageEl>
            <Image
              src="/assets/account.svg"
              width={40}
              height={40}
              style={{ objectFit: "cover" }}
              alt="dot"
            ></Image>
          </ImageEl>
        </AvatarEl>
        <InfoEl>
          <HelloEl>Hello there,</HelloEl>
          <NameEl>Daniel</NameEl>
        </InfoEl>
        <BellEl
          onMouseMove={() => {
            setIshover(true);
          }}
          onMouseLeave={() => {
            setIshover(false);
          }}
        >
          <NewNoticBellEl>
            <ImageEl>
              <Image
                src="/assets/dot.svg"
                width={20}
                height={20}
                alt="dot"
              ></Image>
            </ImageEl>
          </NewNoticBellEl>
          <FontAwesomeIcon
            icon={faBell}
            shake={ishover ? true : false}
            /* {ishover ? {shake} : {}} */
            size="xl"
            style={{ color: "#c0c0c0" }}
          />
        </BellEl>
      </ProfileEl>
    </ContainerEl>
  );
}
