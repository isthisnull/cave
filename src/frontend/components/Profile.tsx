"use client";
import Row from "@/src/frontend/components/common/Row";
import React from "react";
import styled from "styled-components";

import Link from "next/link";
import Image from "next/image";

const ContainerEl = styled(Row)`
  width: 360px;
  justify-content: center;
  /*   background-color: rebeccapurple; */
`;
const ProfileEl = styled(Row)`
  width: calc(100% - 30px);
  justify-content: space-between;
  /*   background-color: red; */
`;
const AvatarEl = styled(Row)``;
const InfoEl = styled(Row)`
  flex-direction: column;
`;
const HelloEl = styled(Row)``;
const NameEl = styled(Row)``;
const BellEl = styled(Row)``;
function Profile() {
  return (
    <ContainerEl>
      <ProfileEl>
        <AvatarEl>ax</AvatarEl>
        <InfoEl>
          <HelloEl>Hello there,</HelloEl>
          <NameEl>Daniel</NameEl>
        </InfoEl>
        <BellEl>ring</BellEl>
      </ProfileEl>
    </ContainerEl>
  );
}

export default Profile;
